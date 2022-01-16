<template>
  <div>
    <v-container>
      skills
      <image-slider />
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              Programming Language
            </v-card-title>
            <v-card-text>
              <p>JAVA</p>
              <p>JAVA</p>
              <p>JAVA</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>
              FrameWork
            </v-card-title>
            <v-card-text>
              <p>Spring Boot + JPA + QueryDSL + JUnit5 + Gradle</p>
              <p>Node.js(express) + sequelize</p>
              <p>vue js</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              Database
            </v-card-title>
            <v-card-text>
              <p>maria & mysql</p>
              <p>redis</p>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>
              etc
            </v-card-title>
            <v-card-text>
              <p>AWS(EC2, RDS, S3, code deploy)</p>
              <p>github action</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>
              개인 프로젝트
            </v-card-title>
            <v-card-text>
              <v-btn>
                상세보기
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col>
          <v-card>
            <v-card-title>
              그룹 프로젝트
            </v-card-title>
            <v-card-text>
              <v-btn>
                상세보기
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SkillCard from './skillCard';
import ImageSlider from './imageSlider';
export default {
  components: {ImageSlider, SkillCard},
  data() {
    return {
      titleList: [
          'Programming Language',
          'Framework',
          'Database',
          'etc'
      ]
    }
  }
}
</script>

<style scoped>

</style>