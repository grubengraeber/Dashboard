package at.enough.dashboard.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloController {

    @GetMapping(value = "/hello", produces = "text/plain")
    public String get() {
        return "HELLO WORLD";
    }

}
