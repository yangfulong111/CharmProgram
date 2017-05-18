package cn.com.all.service.serviceimpl;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import cn.com.all.dao.TestDao;
import cn.com.all.service.TestService;
/**
 * 
 * @author soya.song 2017.4.13
 *
 */
@Service("testService")
public class TestServiceImpl implements  TestService{
	private static final Logger log = (Logger) LoggerFactory.getLogger(TestServiceImpl.class);

	@Resource
	private TestDao testDao;
	@Override
	public void test() {
		System.out.println("service...........");
		testDao.test();
	}

}
