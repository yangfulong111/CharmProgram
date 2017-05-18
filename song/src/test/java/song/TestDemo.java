package song;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import cn.com.all.controller.TestController;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:spring/spring-mvc.xml" })
public class TestDemo {
	@Resource
	private TestController testController;
	private static final Logger logger = LoggerFactory.getLogger(TestDemo.class);

	@Test
	public void test() {

		Map map = new HashMap();
		map.put("name", "aa");
		map.put("age", 2);
		map.remove("name");
		System.out.print("map=" + map);
		// testController.test();
	}
}
