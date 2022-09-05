package at.enough.dashboard.integration;


import at.enough.dashboard.user.AppUserSignUpRequest;
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
public class UserAuthorizationTest {

    @Autowired
    WebTestClient webTestClient;
    String email = "test@email.com";
    String password = "testPassword";

    //create user via auth endpoint
    @BeforeAll
    void setUp() {

        AppUserSignUpRequest signUpRequest = new AppUserSignUpRequest(
                "testFirstName",
                "testLastName",
                email,
                password);

        String userAuthority = "testAuthority";

        webTestClient
                .post()
                .uri(uriBuilder -> uriBuilder
                        .path("/api/auth/signup").build())
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(signUpRequest)
                .exchange();
    }

    @Test
    void testUserHasAccessToUserDetails() {
        webTestClient
                .get()
                .uri(uriBuilder -> uriBuilder
                        .path("api/users/" + email).build())
                .accept(MediaType.APPLICATION_JSON)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody().consumeWith(body -> log.info(body.toString()));

    }


}
