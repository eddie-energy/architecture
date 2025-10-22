---
title: Development Process and Guidelines
order: 11
---

### Definition

The EDDIE System development process follows a shared, agile, and open-source strategy.  
All relevant code, configuration, and documentation are maintained in a single, public GitHub repository, following a shared codebase approach.  
This ensures transparency, consistency, and reusability across teams and institutions.

### Relevance

A unified development process is essential for coordinating contributions between project partners and maintaining quality across all EDDIE System components — including the EDDIE Framework, AIIDA, and Marketplace.  
The use of agile practices, continuous integration, and strict coding guidelines ensures that EDDIE System remains maintainable, scalable, and easily deployable across environments.

### Motivation

The EDDIE System is developed using an agile approach with three-week sprints and a combination of asynchronous (Teams) and synchronous (Jour Fix meetings) collaboration. This setup balances flexibility with coordination, considering that many developers contribute part-time.

Key practices include:

#### Repository and Branching Strategy

- Single shared GitHub repository with protected `main` branch.
- Development in feature branches linked to GitHub Issues.
- Pull requests require review and approval by at least one other developer.
- GitHub Issues are used for project management and tracking (Epics, Features, Bugs).

#### CI/CD Pipeline

Continuous Integration and Delivery are realized using GitHub Actions, providing:

- Automated builds and unit tests.
- Static code analysis via SonarCloud.
- Containerization and deployment to DockerHub.
- Vulnerability scanning of images and dependencies.
  If a build or test fails, the pipeline rolls back automatically and reports issues to the responsible developer.

#### Testing Strategy

- Unit Tests: run on each commit to `main`, ensuring code correctness (≥80% coverage).
- Integration Tests: run nightly to validate system interactions.
- Demo Environment: deploy before each sprint review on a separate hardening environment.

#### Coding Guidelines

- Language: Java
- Frameworks: Spring Boot, Gradle, JPA, Kafka, Docker
- IDE: IntelliJ
- Use dependency injection and write testable, loosely coupled components
- Follow SonarCloud rules for code quality
- Write small, focused commits in English using the format `GH-7 Add feature description`

#### Definition of Ready / Done

Issues and features must meet specific criteria before and after implementation:

- DoR: clear title, description, acceptance criteria, assigned milestone.
- DoD: acceptance criteria met, documented results, PR merged, quality gates passed.

#### Environments

The framework is deployed across three environments:

- Dev – Functional testing of new features.
- Hardening – Performance and acceptance testing under production-like conditions.
- Production – Public, stable deployment for end users.