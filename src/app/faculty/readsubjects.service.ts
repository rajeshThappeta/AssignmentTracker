import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReadsubjectsService {

  subjects:object[]=[{
    "subjectName":"angular",
    "topics":[
              {"topicName":"components",
               "assignments":["what is component?",
                             "What is decorator?",
                             "How can you create component"
                             ]
              }
             ]
    },
    {
    "subjectName":"Nodejs",
    "topics":[
              {"topicName":"expressjs",
               "assignments":["what is express?",
                             "What is mileware?",
                             "How can you create middleware"
                             ]
              }
             ]
    }]

  constructor() { }

  //return subjects
  readSubjects():object[]{
    return this.subjects;
  }
}
