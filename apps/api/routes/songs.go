package routes

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Song struct {
	ID              uuid.UUID `gorm:"primary_key;type:uuid;default:uuid_generate_v4()" json:"id"`
	Title           string    `gorm:"type:varchar(255);not null" json:"title"`
	AlbumID         uuid.UUID `gorm:"type:uuid;not null" json:"albumId"`
	TrackNumber     int       `gorm:"not null" json:"trackNumber"`
	DurationSeconds int       `gorm:"type:int" json:"durationSeconds"`
	CreatedAt       time.Time `gorm:"type:timestamp;default:CURRENT_TIMESTAMP" json:"createdAt"`
	UpdatedAt       time.Time `gorm:"type:timestamp;default:CURRENT_TIMESTAMP" json:"updatedAt"`
}

func AddSongsRoutes(rg *gin.RouterGroup, db *gorm.DB) {
	router := rg.Group("/songs")

	router.GET("", func(c *gin.Context) {
		var songs []Song
		db.Find(&songs)
		c.JSON(http.StatusOK, gin.H{
			"results": songs,
			"count":   len(songs),
		})
	})

	router.GET("/:id", func(c *gin.Context) {
		id := c.Param("id")
		var song Song
		if err := db.Where("id = ?", id).First(&song).Error; err != nil {
			c.JSON(http.StatusNotFound, gin.H{
				"error": "Song not found",
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"result": song,
		})
	})
}
