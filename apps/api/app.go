package main

import (
	"fauxify/routes"
	"fmt"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
)

func getEnv(key, fallback string) string {
	value, exists := os.LookupEnv(key)
	if !exists {
		return fallback
	}
	return value
}

func main() {

	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%s sslmode=%s",
		getEnv("POSTGRES_HOST", "localhost"),
		getEnv("POSTGRES_USER", "faux"),
		getEnv("POSTGRES_PASSWORD", "password"),
		getEnv("POSTGRES_DB", "fauxify"),
		getEnv("POSTGRES_PORT", "5432"),
		"disable")

	tableprefix := fmt.Sprintf("%s.", getEnv("POSTGRES_DB", "fauxify"))

	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			TablePrefix: tableprefix,
		},
	})

	if err != nil {
		panic("failed to connect database")
	}

	router := gin.Default()

	config := cors.DefaultConfig()
	config.AllowAllOrigins = true
	router.Use(cors.New(config))

	v1 := router.Group("/v1")
	routes.AddArtistRoutes(v1, db)
	routes.AddAlbumsRoutes(v1, db)
	routes.AddSongsRoutes(v1, db)
	routes.AddAnalyticsRoutes(v1, db)

	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "health",
		})
	})

	port := os.Getenv("PORT")

	if port == "" {
		port = "8080"
	}

	router.Run(":" + port)
}
