package at.enough.dashboard.security.controller;

import at.enough.dashboard.user.AppUserSignUpRequest;
import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.service.AppUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RequiredArgsConstructor
@RestController
@RequestMapping("/api/auth")
@Slf4j
public class AuthenticationController {

    private final AppUserService appUserService;

    /**
     * signup a new Application User with listed AppUserSignUpRequest - Object
     *
     * @param request
     */
    @PostMapping("/signup")
    public ResponseEntity<AppUser> signUp(@RequestBody AppUserSignUpRequest request) {
        AppUser appUser = appUserService.registerAppUser(request);
        return ResponseEntity.status(201).body(appUser);
    }


}
