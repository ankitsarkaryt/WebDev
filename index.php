<!DOCTYPE html>
<html>

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="styles.css">
</head>

<body>

    <h1 id="main-heading">CRUD Application in PHP</h1>

    <div class="container">
        <h2 style="text-align:center">Students Record</h2>
        <table class="table table-hover table-border table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $servername = "localhost";
                $username = "root";
                $password = "";
                $database = "crudapp";

                $connection = mysqli_connect($servername, $username, $password, $database);

                if (!$connection) 
                {
                    die("Connection Failed");
                } 
                else 
                {
                    // echo "Connection Established";
                    $query = "select * from data";

                    $result = mysqli_query($connection, $query);

                    if (!$result) 
                    {
                        die("query Failed" . mysqli_error());
                    } 
                    else 
                    {
                        while ($row = mysqli_fetch_assoc($result)) 
                        {
                            echo "
                            <tr>
                            <td>$row[id]</td>
                            <td>$row[firstName]</td>
                            <td>$row[lastName]</td>
                            <td>$row[age]</td>
                            </tr>
                                ";
                        }
                    }
                }
                ?>
            </tbody>
        </table>
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
</body>

</html>
