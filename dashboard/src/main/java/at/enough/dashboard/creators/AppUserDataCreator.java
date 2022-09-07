package at.enough.dashboard.creators;

import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.repository.AppUserRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AppUserDataCreator {

    private final AppUserRepository appUserRepository;


    public AppUserDataCreator(AppUserRepository appUserRepository) {
        this.appUserRepository = appUserRepository;

    }

    public List<AppUser> createUserList() {
        List<AppUser> userList = List.of(
                AppUser.builder()
                        .appUserName("tester1")
                        .firstName("testFirstName1")
                        .lastName("testLastName1")
                        .email("test1@test.com")
                        .build(),
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
