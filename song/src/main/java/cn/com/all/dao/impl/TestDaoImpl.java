package cn.com.all.dao.impl;

import org.springframework.stereotype.Repository;

import cn.com.all.dao.TestDao;
@Repository("TestDao")
public class TestDaoImpl implements TestDao{

	@Override
	public void test() {
		System.out.println("dao..........");
	}

}
