<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@page import="java.sql.ResultSet"%>
<%@page import="com.employemanagement.Employee"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<title>Insert title here</title>
<style>
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
 border-collapse: collapse; 
  width: 100%;
 
  
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
  
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover { background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(286,45,789,1));}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
</head>
<body>
<%
Employee emp=(Employee)request.getAttribute("pto");
%>
<script type="text/javascript">
    $(document).ready(function(){
        $("#myModal").modal('show');
    });
</script>
<div class="container">
  <!-- Modal -->
  <div class="modal fade" id="myModal" role="dialog">
    <div class="modal-dialog">
    
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Employee details</h4>
        </div>
        <div class="modal-body">
          <table id="customers">
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Age</th>
    <th>Designation</th>
    <th>Raised Salary</th>
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
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
  
</div>

</body>
</html>