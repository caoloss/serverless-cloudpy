---
title: Git-based Deployments
menuText: Git-based Deployments
description: How to create automatic deployments to the production branch with every push to main and create preview instances upon PRs. 
menuOrder: 8
parent: Workflows
---

# Git-based Deployments

Serverless Cloud allows automatic deployment to stages when pushed into branches and creates preview stages upon PRs. 

*NOTE*: Only GitHub is supported for now with GitHub Free and GitHub Team. GitLab, Bitbucket, and GitHub Enterprise Self-hosted are on our roadmap and will be supported soon.  

Installing a GitHub app for Serverless Cloud on your GitHub account is required to create a git-based deployment workflow. This process can be started in the settings of the app you want to link with a repository.

![gitMenu](https://user-images.githubusercontent.com/85096820/199110624-556278d2-985f-460b-8039-1ce9142eac9d.png)

This will list all public and private repositories in your account. You will need to select a repository to link from the options. 

*NOTE*: Creating a repository from this menu will be supported soon. 

![gitMatching](https://user-images.githubusercontent.com/85096820/199110768-b96c72cd-91a1-4e84-a997-2ff0c7d2e370.png)

After linking an app to your repository, there are several settings that you can configure for the deployment workflows. 

## Configuring the deployments upon pushes to branches 

Serverless Cloud allows automatic deployment to given stages when there’s a push to a certain branch. 

You can match more than one branch with more than one stage. This allows you to match your staging branch with your staging branch, to match the main branch with your production stage. 

![gitBranchStage](https://user-images.githubusercontent.com/85096820/199110872-30039446-a81b-4f3c-b8b2-add088b4b8d8.png)

*NOTE*: If your application is a full-stack app that requires a build before pushing to a stage. Serverless Cloud automatically fetches the cloud:build script in your package.json before publishing to the target stage. 

## Creating preview stages upon PRs 

Serverless Cloud creates preview stages when a PR is created for a base branch. To configure this, you will need to set the base branches. In the below example, Serverless Cloud will create preview stages when there’s a PR opened for main and test-pr branches in git. If you don’t select any branch here, a preview stage will be created for any PRs created. 

![gitPRs](https://user-images.githubusercontent.com/85096820/199110979-1c7ff281-ed31-4673-ade3-f17128b0c251.png)

## Defining the root path of the Serverless Cloud project in your repository

Serverless Cloud project might be a sub-folder in your repository. In this case, you need to give the relative path to Serverless Cloud app as below. 

![gitRoot](https://user-images.githubusercontent.com/85096820/199111092-48eccc07-1d78-48b0-ac60-ef4239f1f7ec.png)

## Restricting CLI deployments

After setting up the git-based deployment workflows, you may want to prevent manual deployments from Cloud Shell or terminal. In this way, you can make sure that only pushes or PRs create stages for you. If you want to prevent CLI deployments, you need to uncheck the below setting. 

*NOTE*: Only account owners can change this setting. 

![gıtCLIdeployments](https://user-images.githubusercontent.com/85096820/199111194-647b2b45-5055-456c-9c46-01eb71cbe553.png)

*NOTE*: Even if you disable the deployments from CLI, deployments with headless mode still stay active. In this way, you can define your own CI/CD pipeline using your favorite provider. See the docs [here](https://www.serverless.com/cloud/docs/workflows/cicd).

