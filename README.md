# COSC2759 Assignment 1
## Notes App - CI Pipeline
- Full Name: Yu-Cheng Lai
- Student ID: s3878874

### Guidance (remove this section before final submission)

1. Refer for assignment specification `Marking Guide` for details of what should appear in this README.

1. If you do not see an `Actions` tab in your GitHub, email patrick.conheady@rmit.edu.au with URL to your repository, so that it can be enabled.

1. Implement your CI pipeline in the directory `.github/workflows`.

1. Refer to [src/README.md](/src/README.md) for important details on building and testing the application.

1. Commit images to the `img` directory and add them like 
    ```html
    <img src="/img/md.png" style="height: 70px;"/>
    ```
    <img src="/img/md.png" style="height: 70px;"/>


Analysis and Solution
### 1.1 What's the Big Deal?
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
With Alpine Inc.'s building and deployment methods, the company relies on one employee's computer/machine to build and deploy all versions of the application. This is a problem when the employee's computer is not working properly, or when the employee is not available. If clients don't see their expected product when the agreed release date comes, there can be seriously business issues with late delivery or no delivery at all.



### 1.2 Solution to the Problem
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
To solve this problem and save Alpine Inc. from bad reputation and potential loss of clients and profits, a CI pipeline can be implemented to automate the building, testing and even deployment processes. There are a few benefits of implementing a CI pipeline:
1. Since Alpine Inc.'s source code is stored in GitHub, we can let GitHub build and test the application for us using GitHub action. This will lower the dependency on one employee's computer and make the building and testing process more reliable.
2. The CI pipeline can be set to run automatically when a new commit is pushed to the repository. This will save the time of the employee who is responsible for building and testing the application, with higher efficiency.
3. With automated testing and proper linting, the automated build process can help find bugs and errors in the code before the application is deployed. This can reduce the workload on QA team and potentially save some money for the company.