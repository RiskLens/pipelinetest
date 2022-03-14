# Interview Task:

### Configure an Azure DevOps Pipeline to do the following:

- Build an API Solution
- Build a UI project
- Run unit tests for the API Solution
- Run unit tests for the UI project
- Publish an API artifact
- Publish a UI artifact

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
