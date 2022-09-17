package at.enough.dashboard.budget.controller;

import at.enough.dashboard.household.service.HouseHoldService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.core.Authentication;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;

@AutoConfigureMockMvc
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ExpensesControllerTest {


    MockMvc mockMvc;

    @MockBean
    Authentication authentication;

    @MockBean
    HouseHoldService houseHoldService;

    @Test
    void getMyHouseHoldExpenseEndpointReturnsOK() {
    }

    @Test
    void addExpenseToMyHouseHoldReturnsExpense() {

    }

    @Test
    void deleteExpenseFromMyHouseHoldEndpointReturns204() {

    }


}