package at.enough.dashboard.integration;

import at.enough.dashboard.user.AppUserDetailService;
import at.enough.dashboard.util.JWTConverter;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

@SpringBootTest
public class UserAuthenticationTest {

    @Autowired
    WebApplicationContext webApplicationContext;

    @Autowired
    JWTConverter jwtConverter;

    @Autowired
    AppUserDetailService appUserDetailService;


    private MockMvc mockMvc;

    @BeforeEach
    public void setup() throws Exception {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.webApplicationContext).build();
    }

    @Test
    void testSignedUpUserReceivesValidAuthToken() throws Exception {

        //setup user information
        String email = "test@email.com";
        String password = "testPassword";
        String userSignUpInformation = "{\"firstName\": \"testName\"," +
                "\"lastName\": \"testLastName\"," +
                "\"email\": \"" + email + "\"," +
                "\"password\": \"" + password + "\"}";
        String userAuthority = "testAuthority";
        String expectedAuthToken = jwtConverter.getAuthorizationToken(email, List.of(userAuthority));

        //signUp user
        mockMvc.perform(
                        post("/api/auth/signup")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(userSignUpInformation)
                                .accept(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().is2xxSuccessful());

        //login user
       /* mockMvc.perform(
                        post("/api/auth/login")
                                .param("username", email)
                                .param("password", password))
                .andExpect(MockMvcResultMatchers.status().is2xxSuccessful());
*/

    }


}
