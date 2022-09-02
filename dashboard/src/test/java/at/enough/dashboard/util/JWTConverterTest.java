package at.enough.dashboard.util;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.TestComponent;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;

@TestComponent
class JWTConverterTest {

    JWTConverter jwtConverter = new JWTConverter("secretLengthMustBeAtLeas256Bitsa", 1);

    @Test
    void testGettingAnAuthorizationToken() {
        String token = jwtConverter.getAuthorizationToken(
                "testUserName",
                List.of("test1", "test2"));
        System.out.println("token = " + token);
        Assertions.assertFalse(token.isEmpty());

    }

    @Test
    void decodeAuthorizationToken() {
        String expectedUsername = "testUserName";
        List<String> expectedAuthorities = new ArrayList<>(List.of("testAuth1", "testAuth2"));

        String token = jwtConverter.getAuthorizationToken(
                expectedUsername,
                expectedAuthorities);
        System.out.println("decode = " + token);

        AppUserCredentialDTO result = jwtConverter.decodeAuthorizationToken(token);
        Assertions.assertEquals(expectedUsername, result.username());
        Assertions.assertEquals(expectedAuthorities, result.authorities());

        }


}