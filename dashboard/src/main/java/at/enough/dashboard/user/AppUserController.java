package at.enough.dashboard.user;

import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.service.AppUserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(("/api/user"))
@Slf4j
public class AppUserController {

    private final AppUserService appUserService;

    @GetMapping("/details")
    public AppUser getAppUserDetails(Authentication authentication) {
        String userIdentifier = authentication.getName();
        return appUserService.getAppUserBy(userIdentifier);
    }


    @GetMapping("/{appUserIdentifier}")
    public AppUser getAppUser(@PathVariable("appUserIdentifier") String appUserIdentifier) {
        log.info("trying to fetch user by identifier = " + appUserIdentifier);
        return appUserService.getAppUserBy(appUserIdentifier);

    }


}
