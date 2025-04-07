package routes

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Artist struct {
	ID        uuid.UUID `gorm:"primary_key;type:uuid;default:uuid_generate_v4()" json:"id"`
	Name      string    `json:"name"`
	Albums    []Album   `gorm:"foreignKey:artist_id" json:"albums"`
	Country   string    `json:"country"`
	CreatedAt time.Time `gorm:"autoCreateTime" json:"createdAt"`
	UpdatedAt time.Time `gorm:"autoUpdateTime" json:"updatedAt"`
}

func AddArtistRoutes(rg *gin.RouterGroup, db *gorm.DB) {
	router := rg.Group("/artists")

	router.POST("", func(c *gin.Context) {
		var artist Artist
		if err := c.ShouldBindJSON(&artist); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{
				"error": "Invalid input",
			})
			return
		}
		if err := db.Create(&artist).Error; err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"error": "Failed to create artist",
			})
			return
		}
		c.JSON(http.StatusCreated, gin.H{
			"result": artist,
		})
	})

	router.GET("", func(c *gin.Context) {
		var artists []Artist
		db.Find(&artists)
		c.JSON(http.StatusOK, gin.H{
			"results": artists,
			"count":   len(artists),
		})
	})

	router.GET("/:id", func(c *gin.Context) {
		id := c.Param("id")
		var artist Artist
		if err := db.Preload("Albums").Where("id = ?", id).First(&artist).Error; err != nil {
			c.JSON(http.StatusNotFound, gin.H{
				"error": "Artist not found",
			})
			return
		}
		c.JSON(http.StatusOK, gin.H{
			"result": artist,
		})
	})
}
