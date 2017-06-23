pipeline {
  agent none
  stages {
    stage('Clone') {
      steps {
        git(url: 'https://github.com/SLedunois/frm-ng2', branch: 'master', poll: true)
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Lint') {
      steps {
        sh 'ng lint'
      }
    }
    stage('Tests') {
      steps {
        parallel(
          "Tests": {
            sh 'ng test'
            
          },
          "E2e": {
            sh 'ng e2e'
            
          }
        )
      }
    }
    stage('Build') {
      steps {
        sh 'ng build'
      }
    }
  }
}