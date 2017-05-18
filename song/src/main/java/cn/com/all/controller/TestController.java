package cn.com.all.controller;

import java.io.Serializable;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.com.all.service.TestService;
/**
 * 
 * @author soya.song 2017.4.13
 *
 */
@Controller
@RequestMapping("/testController")
public class TestController implements Serializable {
	private static final long serialVersionUID = -8964537612365922875L;
	private static final Logger log = LoggerFactory.getLogger(TestController.class);
	
	@Resource
	private TestService testService;
	public void test() {
		testService.test();
		
	}
}
