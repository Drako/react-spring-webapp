package guru.drako.examples.webapp.controllers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class WelcomeController {
  data class Message(val content: String)

  @GetMapping("/api/welcome")
  fun getMessage() = Message("Welcome to React")
}
