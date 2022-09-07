package at.enough.dashboard.security.controller;

import at.enough.dashboard.user.AppUserSignUpRequest;
import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.repository.AppUserRepository;
import at.enough.dashboard.user.service.AppUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
@Slf4j
public class AuthenticationController {

    private final AppUserService appUserService;
    private final AppUserRepository appUserRepository;

    /**
     * signup a new Application User with listed AppUserSignUpRequest - Object
     * @param request
     */
    @PostMapping("/signup")
    public void signUp(@RequestBody AppUserSignUpRequest request) {
        log.info("User created");
        appUserService.registerAppUser(request);
    }


}