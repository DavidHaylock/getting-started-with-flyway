package routes

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type SongAnalytics struct {
	ID        uuid.UUID `gorm:"primary_key;type:uuid;default:uuid_generate_v4()" json:"id"`
	SongId    uuid.UUID `gorm:"type:uuid;not null" json:"songId"`
	PlayTime  int       `gorm:"not null" json:"playTime"`
	UserID    uuid.UUID `gorm:"type:int" json:"userId"`
	CreatedAt time.Time `gorm:"type:timestamp;default:CURRENT_TIMESTAMP" json:"createdAt"`
}

type MostPlays struct {
	SongTitle  string `json:"songTitle"`
	AlbumTitle string `json:"albumTitle"`
	ArtistName string `json:"artistName"`
	PlayCount  int    `json:"playCount"`
}

func AddAnalyticsRoutes(rg *gin.RouterGroup, db *gorm.DB) {
	router := rg.Group("/analytics")

	router.GET("/most-plays", func(c *gin.Context) {
		var mostPlays []MostPlays
		if err := db.Limit(10).Find(&mostPlays).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to fetch most played songs",
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"results": mostPlays,
			"count":   len(mostPlays),
		})
	})

	router.POST("", func(c *gin.Context) {
		var songAnalytics SongAnalytics
		if err := c.ShouldBindJSON(&songAnalytics); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid request",
			})
			return
		}

		songAnalytics.ID = uuid.New()

		if err := db.Create(&songAnalytics).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to create analytics",
			})
			return
		}

		c.JSON(http.StatusCreated, gin.H{
			"result": songAnalytics,
		})
	})
}
