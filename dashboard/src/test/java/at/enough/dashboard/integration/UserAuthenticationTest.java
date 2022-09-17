package at.enough.dashboard.integration;

import at.enough.dashboard.user.AppUserSignUpRequest;
import at.enough.dashboard.security.util.JWTConverter;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.http.MediaType;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureWebTestClient
public class UserAuthenticationTest {

    @Autowired
    WebApplicationContext webApplicationContext;

    @Autowired
    JWTConverter jwtConverter;

    @Autowired
    WebTestClient webTestClient;

    @Autowired
    ApplicationContext applicationContext;


    @Test
    void testSignedUpUserReceivesValidAuthToken() throws Exception {
        //setup user information
        String email = "test@email.com";
        String password = "testPassword";
        AppUserSignUpRequest signUpRequest = new AppUserSignUpRequest(
                "testFirstName",
                "testLastName",
                email,
                password);

        String userAuthority = "testAuthority";
        String expectedAuthToken = jwtConverter.getAuthorizationToken(email, List.of(userAuthority));

        webTestClient
                .post()
                .uri(uriBuilder -> uriBuilder
                        .path("/api/auth/signup").build())
                .contentType(MediaType.APPLICATION_JSON)
                .bodyValue(signUpRequest)
                .exchange()
                .expectStatus().is2xxSuccessful();


        webTestClient
                .post()
                .uri(uriBuilder -> uriBuilder
                        .path("api/auth/login")
                        .queryParam("username", email)
                        .queryParam("password", password)
                        .build())
                .exchange()
                .expectStatus().is2xxSuccessful();

    }


}
