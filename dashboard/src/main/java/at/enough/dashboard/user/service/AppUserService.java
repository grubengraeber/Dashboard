package at.enough.dashboard.user.service;

import at.enough.dashboard.user.AppUserSignUpRequest;
import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.model.Role;
import at.enough.dashboard.user.model.RoleValues;
import at.enough.dashboard.user.repository.AppUserRepository;
import at.enough.dashboard.user.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;
import java.util.Set;

/**
 * CRUD for AppUser domain, Registration of an AppUserSingUpRequest
 */
@Log4j2
@RequiredArgsConstructor
@Service
public class AppUserService {

    private final PasswordEncoder passwordEncoder;
    private final AppUserRepository appUserRepository;
    private final RoleRepository roleRepository;


    public AppUser registerAppUser(AppUserSignUpRequest request) {
        Role defaultRole = roleRepository.findByName(RoleValues.User.name()).orElseThrow(EntityNotFoundException::new);
        /*if (emailExist(request.email())) {
            throw new EntityExistsException();
        }*/
        AppUser appUser = AppUser.builder()
                .email(request.email())
                .firstName(request.firstName())
                .lastName(request.lastName())
                .password(passwordEncoder.encode(request.password()))
                .roles(Set.of(defaultRole))
                .build();
        log.debug("new User Registration complete for username = {}", appUser.getUsername());
        //todo email already exist 409!
        return appUserRepository.save(appUser);

    }

    /**
     *
     * @param email none null string representing an email
     * @return
     */
    public AppUser getAppUserBy(String email) {
        return appUserRepository.findAppUserByEmail(email).orElseThrow(() ->
                new UsernameNotFoundException("User not found by email "+ email ));
    }

    public boolean emailExist(String email) {
        return appUserRepository.existsAppUserByEmail(email);
    }



}
