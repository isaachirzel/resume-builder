package dev.hirzel.resumebuilder.interceptor;

import dev.hirzel.resumebuilder.exception.ApiError;
import dev.hirzel.resumebuilder.service.UserService;
import dev.hirzel.resumebuilder.util.RequestUtils;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;

import java.util.Arrays;

public class AuthenticationInterceptor implements HandlerInterceptor
{
	@Autowired
	UserService userService;

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception
	{
		var token = RequestUtils.getSessionToken(request);
		var user = userService.getUser(token);

		request.setAttribute("user", user);

		return true;
	}
}
