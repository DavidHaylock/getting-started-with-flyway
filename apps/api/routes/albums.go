package routes

import (
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Album struct {
	ID          uuid.UUID  `gorm:"primary_key;type:uuid;default:uuid_generate_v4()" json:"id"`
	Title       string     `gorm:"type:varchar(255);not null" json:"title"`
	ArtistID    uuid.UUID  `gorm:"type:uuid;not null" json:"artistId"`
	Songs       []Song     `gorm:"foreignKey:album_id" json:"songs"`
	ReleaseDate *time.Time `gorm:"type:date" json:"releaseDate"`
	CreatedAt   time.Time  `gorm:"autoCreateTime" json:"createdAt"`
	UpdatedAt   time.Time  `gorm:"autoUpdateTime" json:"updatedAt"`
}

func AddAlbumsRoutes(rg *gin.RouterGroup, db *gorm.DB) {
	router := rg.Group("/albums")

	router.GET("", func(c *gin.Context) {
		var albums []Album
		db.Find(&albums)
		c.JSON(http.StatusOK, gin.H{
			"results": albums,
			"count":   len(albums),
		})
	})

	router.GET("/:id", func(c *gin.Context) {
		id := c.Param("id")
		var album Album
		if err := db.Preload("Songs").Where("id = ?", id).First(&album).Error; err != nil {
			c.JSON(http.StatusNotFound, gin.H{
				"error": "Album not found",
			})
			return
		}

		c.JSON(http.StatusOK, gin.H{
			"result": album,
		})
	})
}
