package com.systemsinmotion.orgchart.data;

import java.util.List;

import com.systemsinmotion.orgchart.entity.Department;
import com.systemsinmotion.orgchart.entity.Employee;
import com.systemsinmotion.orgchart.entity.JobTitle;

public interface EmployeeRepository extends BaseRepository<Employee, Integer> {
	
	List<Employee> findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(String str1, String str2);

	List<Employee> findByDepartment(Department department);

	Employee findByEmail(String email);

	Employee findById(Integer id);

	List<Employee> findByManager(Employee manager);

	List<Employee> findByFirstNameAndLastNameAndDepartmentIdAndJobTitleId(
			String firstName, String lastName, Integer id, Integer id2);
	
}