package at.enough.dashboard.integration;

import at.enough.dashboard.user.AppUserSignUpRequest;
import at.enough.dashboard.user.model.AppUser;
import at.enough.dashboard.user.repository.AppUserRepository;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureWebTestClient
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@Slf4j
public class UserSignUpTest {

    @Autowired
    private WebTestClient webTestClient;

    @Autowired
    private AppUserRepository appUserRepository;

    @BeforeAll
    void setUp() {
        AppUser testUser = AppUser.builder()
                .email("duplicate@test.com")
                .build();
        appUserRepository.save(testUser);
    }

    @Test
    void testEmailAlreadyExistsReturnsStatus409() {
        AppUserSignUpRequest signUpRequest = new AppUserSignUpRequest(
                "test",
                "test",
                "duplicate@test.com",
                "test");

        webTestClient
                .post()
                .uri("/api/auth/signup")
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(signUpRequest)
                .exchange()
                .expectStatus().isEqualTo(409);

    }


}
