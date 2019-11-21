<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import="java.sql.ResultSet"%>
<%@page import="com.employemanagement.Employee"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Admin</title>
<style>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
 border-collapse: collapse; 
  width: 100%;
 
  
}

#customers td, #customers th {
  border: disable;
  padding: 8px;
  
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover { background-image: linear-gradient(to bottom, rgba(255,0,0,0), #f2223e);}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: blue;
  color: white;
  background-image: linear-gradient(to bottom, rgba(255,0,0,0), blue);
}
input[type=text], select {
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=number] {
  width: 60%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type=submit] {
  width: 20%;
  background-color: #0b11d4;
  color: white;
  padding: 14px 20px;
  margin: 8px 0 0 8px	;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #f2223e;
}

div {
  border-radius: 5px;
  padding: 20px;
  width:43%;
  height:40%;
 
}
div#display{
float:left;
height:90%;
padding:10px;
margin-left:10px;	
}
div#enter{
width:60%;
    margin-left: 180px;
    margin-top: 20px;
}
div#admin{
float:left;
width:50%;
height:90%;
padding:10px;
}
div.container{
border: 2px solid;
    height: 550px;
    width:99%;
    
background-image: linear-gradient(to bottom, rgba(255,0,0,0),#5373d4);
}
div#header{
border: 2px solid;
    width:99%;
    
background-image: linear-gradient(to bottom, rgba(255,0,0,0),#5373d4);
}
</style>
</head>
<body>
<%
Employee emp=(Employee)request.getAttribute("pto");
%>
 <div id="header">
 <h1 style="text-align: center">ADMIN PORTAL</h1>
 </div>
<div class="container">
<div id="display">
<table id="customers">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Designation</th>
    <th>Salary</th>
  </tr>
  
  <c:forEach items="${sessionScope.List_ID}" var="id" varStatus="loop">
   <tr>
 
      <td>${id}</td>
      <td>${sessionScope.List_name[loop.index]}</td>
      <td>${sessionScope.List_age[loop.index]}</td>
      <td>${sessionScope.List_design[loop.index]}</td>
      <td>${sessionScope.List_salary[loop.index]}</td>
   
 <%--    <td><%=emp.getEMP_ID() %></td>
    <td><%=emp.getEMP_NAME() %></td>
    <td><%=emp.getEMP_AGE() %></td>
    <td><%=emp.getEMP_DESIGNATION() %></td>
    <td><%=emp.getEMP_SALARY() %></td> --%>
  </tr>
  </c:forEach>
</table>
</div>
<div id="admin">

<form action="./Update">
<div id="enter">
<h2>Alter Employee Salary</h2><br><br>
 <label for="country">Employee Name</label><br>
  <select class="custom-select" id="inputGroupSelect01" name="ddlName" style="filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity: 0.5;opacity: 0.5;" >
  <option>Please choose the employee</option>
  <c:forEach items="${sessionScope.List_name}" var="id" varStatus="loop">
  <option>${id}</option>
     </c:forEach>
</select>
<br>
      <label for="country">Alter</label><br>
  <select class="custom-select" id="inputGroupSelect01" name="ddlAlter" style="filter:alpha(opacity=50);-moz-opacity:0.5;-khtml-opacity: 0.5;opacity: 0.5;">
  <option selected>Increment/Decrement</option>
  <option value="1">Incerement</option>
  <option value="2">decrement</option>
</select>
  <br>
   <label for="fname">Amount</label><br>
    <input type="number" id="salary" name="txtsalary" placeholder="Enter the amount you want to alter">
<br>
    <input type="submit" value="Submit">
</div>
  </form>

</div>
</body>
</html>