package at.enough.dashboard.user.service;

import at.enough.dashboard.user.AppUserSignUpRequest;
import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.repository.AppUserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * CRUD for AppUser domain, Registration of an AppUserSingUpRequest
 */
@Log4j2
@RequiredArgsConstructor
@Service
public class AppUserService {

    private final PasswordEncoder passwordEncoder;
    private final AppUserRepository appUserRepository;

    public AppUser registerAppUser(AppUserSignUpRequest request) {
        AppUser appUser = AppUser.builder()
                .email(request.email())
                .firstName(request.firstName())
                .lastName(request.lastName())
                .password(passwordEncoder.encode(request.password()))
                .build();
        log.debug("new User Registration complet for username = {}", appUser.getUsername());
        return appUserRepository.save(appUser);

    }

}
