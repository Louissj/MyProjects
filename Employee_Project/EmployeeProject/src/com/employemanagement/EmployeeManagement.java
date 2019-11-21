package com.employemanagement;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class EmployeeManagement
 */
public class EmployeeManagement extends HttpServlet {
	Connection con;
	Statement st;
	ResultSet rs;

	public void init(ServletConfig config) throws ServletException {
		ServletContext context = config.getServletContext();
		String strDriver = context.getInitParameter("driver");
		String strUrl = context.getInitParameter("dburl");
		String strUserID = context.getInitParameter("dbuid");
		String strPword = context.getInitParameter("dbpwd");
		try {
			Class.forName(strDriver);
			con = DriverManager.getConnection(strUrl, strUserID, strPword);
			st = con.createStatement();
		} catch (ClassNotFoundException e) {
			System.out.println(e);
		} catch (SQLException e1) {
			// TODO Auto-generated catch block
			System.out.println(e1);
		}
	}

	protected void service(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		String path = req.getServletPath();
		System.out.println(path);
		if (path.equalsIgnoreCase("/Admin")) {
			res.setContentType("text/html");
			PrintWriter pw = res.getWriter();
			String strName = req.getParameter("txtUname");
			String strPword = req.getParameter("txtPword");
			if ((strName.equalsIgnoreCase("admin")) && (strPword.equalsIgnoreCase("admin"))) {
				ResultSet rs = null;
				PreparedStatement ps = null;
				try {
					rs = st.executeQuery("select * from employee_table");
					ArrayList listID = new ArrayList();
					ArrayList listname = new ArrayList();
					ArrayList listage = new ArrayList();
					ArrayList listdesignation = new ArrayList();
					ArrayList listsalary = new ArrayList();
					while (rs.next()) {
						int empID = rs.getInt("EMP_ID");
						String empName = rs.getString("EMP_NAME");
						String empAge = rs.getString("EMP_AGE");
						String empDesign = rs.getString("EMP_DESIGNATION");
						int empSal = rs.getInt("EMP_SALARY");
						Employee emp = new Employee();
						emp.setEMP_ID(empID);
						emp.setEMP_NAME(empName);
						emp.setEMP_AGE(empAge);
						emp.setEMP_DESIGNATION(empDesign);
						emp.setEMP_SALARY(empSal);
						listID.add(empID);
						listname.add(empName);
						listage.add(empAge);
						listdesignation.add(empDesign);
						listsalary.add(empSal);

						HttpSession ses = req.getSession();
						ses.setAttribute("List_ID", listID);
						ses.setAttribute("List_name", listname);
						ses.setAttribute("List_age", listage);
						ses.setAttribute("List_design", listdesignation);
						ses.setAttribute("List_salary", listsalary);
						req.setAttribute("pto", emp);
						System.out.println(emp.getEMP_NAME());
					}

					RequestDispatcher rd = req.getRequestDispatcher("./jsp/Admin.jsp");
					rd.include(req, res);

				} catch (Exception e) {
					// TODO: handle exception
				}
			} else {
				RequestDispatcher rd = req.getRequestDispatcher("./jsp/Failure.jsp");
				rd.include(req, res);
			}

		} else if (path.equalsIgnoreCase("/Register")) {
			res.setContentType("text/html");
			PrintWriter pw = res.getWriter();
			String strFname = req.getParameter("txtFirstname");
			String strLname = req.getParameter("txtLastname");
			String strAge = req.getParameter("txtAge");
			String strdesignation;
			String d = req.getParameter("ddlDesignation");
			int Salary;
			int i = 0;
			try {
				if (d.equals("1")) {
					Salary = 30000;
					strdesignation = "Manager";
					PreparedStatement ps = con.prepareStatement(
							"insert into employee_table (EMP_ID,EMP_NAME,EMP_AGE,EMP_DESIGNATION,EMP_SALARY)values (emp_id_sequence.nextval,?,?,?,?)");
					ps.setString(1, strFname + strLname);
					ps.setString(2, strAge);
					ps.setString(3, strdesignation);
					ps.setInt(4, Salary);
					i = ps.executeUpdate();
					if (i == 1) {

						RequestDispatcher rd = req.getRequestDispatcher("./jsp/Success.jsp");
						rd.include(req, res);
					}
				} else if (d.equals("2")) {
					Salary = 20000;
					strdesignation = "Programmer";
					PreparedStatement ps = con.prepareStatement(
							"insert into employee_table (EMP_ID,EMP_NAME,EMP_AGE,EMP_DESIGNATION,EMP_SALARY)values (emp_id_sequence.nextval,?,?,?,?)");
					ps.setString(1, strFname + strLname);
					ps.setString(2, strAge);
					ps.setString(3, strdesignation);
					ps.setInt(4, Salary);
					i = ps.executeUpdate();
					if (i == 1) {
						RequestDispatcher rd = req.getRequestDispatcher("./jsp/Success.jsp");
						rd.include(req, res);
					}
				} else if (d.equals("3")) {
					Salary = 15000;
					strdesignation = "Tester";
					PreparedStatement ps = con.prepareStatement(
							"insert into employee_table (EMP_ID,EMP_NAME,EMP_AGE,EMP_DESIGNATION,EMP_SALARY)values (emp_id_sequence.nextval,?,?,?,?)");
					ps.setString(1, strFname + strLname);
					ps.setString(2, strAge);
					ps.setString(3, strdesignation);
					ps.setInt(4, Salary);
					System.out.println("asdfghjklkjhgfdsa");
					i = ps.executeUpdate();
					if (i == 1) {
						RequestDispatcher rd = req.getRequestDispatcher("./jsp/Success.jsp");
						rd.include(req, res);
					}
				}

			} catch (Exception e) {

			}
		} else if (path.equalsIgnoreCase("/Display")) {
			ResultSet rs = null;
			PreparedStatement ps = null;
			try {
				rs = st.executeQuery("select * from employee_table");
				ArrayList listID = new ArrayList();
				ArrayList listname = new ArrayList();
				ArrayList listage = new ArrayList();
				ArrayList listdesignation = new ArrayList();
				ArrayList listsalary = new ArrayList();
				while (rs.next()) {
					int empID = rs.getInt("EMP_ID");
					String empName = rs.getString("EMP_NAME");
					String empAge = rs.getString("EMP_AGE");
					String empDesign = rs.getString("EMP_DESIGNATION");
					int empSal = rs.getInt("EMP_SALARY");
					Employee emp = new Employee();
					emp.setEMP_ID(empID);
					emp.setEMP_NAME(empName);
					emp.setEMP_AGE(empAge);
					emp.setEMP_DESIGNATION(empDesign);
					emp.setEMP_SALARY(empSal);
					listID.add(empID);
					listname.add(empName);
					listage.add(empAge);
					listdesignation.add(empDesign);
					listsalary.add(empSal);

					HttpSession ses = req.getSession();
					ses.setAttribute("List_ID", listID);
					ses.setAttribute("List_name", listname);
					ses.setAttribute("List_age", listage);
					ses.setAttribute("List_design", listdesignation);
					ses.setAttribute("List_salary", listsalary);
					req.setAttribute("pto", emp);

				}

				RequestDispatcher rd = req.getRequestDispatcher("./jsp/DisplayEmployee.jsp");
				rd.include(req, res);

			} catch (Exception e) {
				// TODO: handle exception
			}
		} else if (path.equalsIgnoreCase("/RaiseSalary")) {
			ResultSet rs = null;
			PreparedStatement ps = null;
			int raiseSal = 0;
			try {
				rs = st.executeQuery("select * from employee_table");
				ArrayList listID = new ArrayList();
				ArrayList listname = new ArrayList();
				ArrayList listage = new ArrayList();
				ArrayList listdesignation = new ArrayList();
				ArrayList listsalary = new ArrayList();
				while (rs.next()) {
					int empID = rs.getInt("EMP_ID");
					String empName = rs.getString("EMP_NAME");
					String empAge = rs.getString("EMP_AGE");
					String empDesign = rs.getString("EMP_DESIGNATION");
					int empSal = rs.getInt("EMP_SALARY");
					Employee emp = new Employee();
					emp.setEMP_ID(empID);
					emp.setEMP_NAME(empName);
					emp.setEMP_AGE(empAge);
					emp.setEMP_DESIGNATION(empDesign);
					emp.setEMP_SALARY(empSal);
					listID.add(empID);
					listname.add(empName);
					listage.add(empAge);
					listdesignation.add(empDesign);
					if (empDesign.equalsIgnoreCase("manager")) {
						raiseSal = empSal + 15000;
						listsalary.add(raiseSal);
					} else if (empDesign.equalsIgnoreCase("programmer")) {
						raiseSal = empSal + 10000;
						listsalary.add(raiseSal);
					} else if (empDesign.equalsIgnoreCase("tester")) {
						raiseSal = empSal + 8000;
						listsalary.add(raiseSal);
					}

					HttpSession ses = req.getSession();
					ses.setAttribute("List_ID", listID);
					ses.setAttribute("List_name", listname);
					ses.setAttribute("List_age", listage);
					ses.setAttribute("List_design", listdesignation);
					ses.setAttribute("List_salary", listsalary);
					req.setAttribute("pto", emp);

				}

				RequestDispatcher rd = req.getRequestDispatcher("./jsp/RaiseSalary.jsp");
				rd.include(req, res);

			} catch (Exception e) {
				// TODO: handle exception
			}
		} else if (path.equalsIgnoreCase("/Update")) {
			ResultSet rs = null;
			String Name = req.getParameter("ddlName");
			String Alter = req.getParameter("ddlAlter");
			int Alter_Salary = Integer.parseInt(req.getParameter("txtsalary"));
			int Salary;
			int i = 0;
			try {
				ResultSet rs1 = st.executeQuery("select * from employee_table");
				while (rs1.next()) {
					if ((rs1.getString("emp_name")).equalsIgnoreCase(Name)) {
						if (Alter.equalsIgnoreCase("1")) {
							Salary = rs1.getInt("EMP_SALARY") + Alter_Salary;
							PreparedStatement ps = con.prepareStatement("UPDATE employee_table SET EMP_SALARY = ? WHERE  EMP_NAME = ?");
							ps.setInt(1, Salary);
							ps.setString(2, Name);
							i = ps.executeUpdate();
							if (i == 1) {

								RequestDispatcher rd = req.getRequestDispatcher("./jsp/Success.html");
								rd.include(req, res);
							}

						} else if (Alter.equalsIgnoreCase("2")) {
							int salary = rs1.getInt("EMP_SALARY");
							Salary = salary - Alter_Salary;
							PreparedStatement ps = con
									.prepareStatement("UPDATE employee_table SET EMP_SALARY = ? WHERE EMP_NAME = ?");
							ps.setInt(1, Salary);
							ps.setString(2, Name);
							i = ps.executeUpdate();
							if (i == 1) {
								RequestDispatcher rd = req.getRequestDispatcher("./jsp/Success.html");
								rd.include(req, res);
							}
						}

					}

				}
			} catch (Exception e) {
				// TODO: handle exception
			}

		}
	}

	public void destroy() {
		// TODO Auto-generated method stub
	}
}
