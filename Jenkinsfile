pipeline {
  agent any
 
  tools {nodejs "node"}
stages{
  stage('Change dir') {
      steps {   
        dir ('/var/www') {
          sh 'pwd'
          sh 'ls'
          checkout scm
          sh 'ls'
          sh 'git --version'
          echo "Branch: ${env.BRANCH_NAME}"
          sh 'docker -v'
          sh 'printenv'
          sh 'sudo yarn'
          sh 'sudo yarn build'
          sh 'sudo pm2 restart test'
         
        }

       } 
    } 
  } 
}    
 