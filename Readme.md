# Interview Task:

### Configure an Azure DevOps Pipeline to do the following:

- Build an API Solution
- Build a UI project
- Run unit tests for the API Solution
- Run unit tests for the UI project
- Publish an API artifact
- Publish a UI artifact

- Restore & Build API.csproj using dotnet build
- Restore & Build pipeline-test-frontend using "npm install" and "npm run-script build"
- Test dotnet projects using dotnet test
- Test pipeline-test-frontend using "npm run-script test"
- Publish API.csproj project as a pipeline artifact
- Publish pipeline-test-frontend/build as a pipeline artifact

### Ideally

- Pipeline fails when any project fails to build
- Pipeline fails when any tests fails

## Reference

| Task                    | Command(s)               | Required Environment Variables |
| ----------------------- | ------------------------ | ------------------------------ |
| Build API               | `dotnet build`           |
| Test API                | `dotnet test`            |
| Publish API             | `dotnet publish`         |
| Install UI Dependencies | `npm install`            |
| Build UI                | `npm run build`          | `CI=true`                      |
| Test UI                 | `npm test -- --coverage` | `CI=true`                      |
