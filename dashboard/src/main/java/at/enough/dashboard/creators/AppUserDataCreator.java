package at.enough.dashboard.creators;

import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.model.Role;
import at.enough.dashboard.user.repository.AppUserRepository;
import at.enough.dashboard.user.repository.RoleRepository;
import at.enough.dashboard.user.service.AppUserService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Component
public class AppUserDataCreator {

    private final AppUserRepository appUserRepository;
    private final PasswordEncoder passwordEncoder;
    private final AppUserService appUserService;
    private final RoleRepository roleRepository;
    public AppUserDataCreator(AppUserRepository appUserRepository, PasswordEncoder passwordEncoder, AppUserService appUserService, RoleRepository roleRepository) {
        this.appUserRepository = appUserRepository;

        this.passwordEncoder = passwordEncoder;
        this.appUserService = appUserService;
        this.roleRepository = roleRepository;
    }

    public List<AppUser> createUserList() {

        Optional<Role> role = roleRepository.findByName("User");
        List<AppUser> userList = List.of(

                AppUser.builder()
                        .appUserName("tester2")
                        .firstName("testFirstName2")
                        .lastName("testLastName2")
                        .email("test2@test.com")
                        .build(),
                AppUser.builder()
                        .appUserName("tester3")
                        .firstName("testFirstName3")
                        .lastName("testLastName3")
                        .email("test3@test.com")
                        .build(),
                AppUser.builder()
                        .appUserName("tester4")
                        .firstName("testFirstName4")
                        .lastName("testLastName4")
                        .email("test4@test.com")
                        .build()
        );
       return appUserRepository.saveAll(userList);


    }
}
