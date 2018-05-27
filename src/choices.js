import _ from 'lodash';

const tests = [
  {
    "id": 1,
    "source": "/audio/1.mp3",
    "success": null,
    "key": "C Maj",
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": true, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 2,
    "source": "/audio/2.mp3",
    "success": null,
    "key": "C Maj",
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": true, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 3,
    "source": "/audio/c_ton.mp3",
    "success": null,
    "key": "C Maj",
    "choices": [
      {"is_correct": true, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 4,
    "source": "/audio/d_ton.mp3",
    "success": null,
    "key": "D Maj",
    "choices": [
      {"is_correct": true, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 5,
    "source": "/audio/d_sub.mp3",
    "success": null,
    "key": "D Maj",
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": true, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 6,
    "source": "/audio/d_dom.mp3",
    "success": null,
    "key": "D Maj",
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": true, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 7,
    "source": "/audio/a_ton.mp3",
    "success": null,
    "key": "A Min",
    "choices": [
      {"is_correct": true, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 8,
    "source": "/audio/a_sub.mp3",
    "success": null,
    "key": "A Min",
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": true, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 9,
    "source": "/audio/a_dom.mp3",
    "success": null,
    "key": "A Min",
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": true, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  }
]

export function getChoices() {
  return tests;
}

export function getKeys() {
  return _(getChoices()).map('key').uniq().value();
}
