package main

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func main() {
	serve := gin.Default()
	const PORT = "8000"

	serve.GET("/", func(ctx *gin.Context) {
		ctx.JSON(200, gin.H{
			"title": "The Chikitaverse",
		})
	})

	serve.Run(":" + PORT)
	fmt.Printf("Server running on port %s \n", PORT)
}