import _ from 'lodash';
import * as Keys from './constants/keys';

const tests = [
  {
    "id": 1,
    "source": "/audio/1.mp3",
    "success": null,
    "key": Keys.C_MAJ,
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
    "key": Keys.C_MAJ,
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
    "key": Keys.C_MAJ,
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
    "key": Keys.D_MAJ,
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
    "key": Keys.D_MAJ,
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
    "key": Keys.D_MAJ,
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
    "key": Keys.A_MIN,
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
    "key": Keys.A_MIN,
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
    "key": Keys.A_MIN,
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": true, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 10,
    "source": "/audio/c-guitar/guitar-c-d.mp3",
    "success": null,
    "key": Keys.C_MAJ,
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": true, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 11,
    "source": "/audio/c-guitar/guitar-c-t.mp3",
    "success": null,
    "key": Keys.C_MAJ,
    "choices": [
      {"is_correct": true, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 12,
    "source": "/audio/c-guitar/guitar-c-s.mp3",
    "success": null,
    "key": Keys.C_MAJ,
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": true, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 13,
    "source": "/audio/d-guitar/guitar-d-d.mp3",
    "success": null,
    "key": Keys.D_MAJ,
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": true, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 14,
    "source": "/audio/d-guitar/guitar-d-t.mp3",
    "success": null,
    "key": Keys.D_MAJ,
    "choices": [
      {"is_correct": true, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 15,
    "source": "/audio/d-guitar/guitar-d-s.mp3",
    "success": null,
    "key": Keys.D_MAJ,
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": true, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 16,
    "source": "/audio/e-guitar/guitar-e-d.mp3",
    "success": null,
    "key": Keys.E_MAJ,
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": true, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 17,
    "source": "/audio/e-guitar/guitar-e-t.mp3",
    "success": null,
    "key": Keys.E_MAJ,
    "choices": [
      {"is_correct": true, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 18,
    "source": "/audio/e-guitar/guitar-e-s.mp3",
    "success": null,
    "key": Keys.E_MAJ,
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": true, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 19,
    "source": "/audio/f-guitar/guitar-f-d.mp3",
    "success": null,
    "key": Keys.F_MAJ,
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": true, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 20,
    "source": "/audio/f-guitar/guitar-f-t.mp3",
    "success": null,
    "key": Keys.F_MAJ,
    "choices": [
      {"is_correct": true, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": false, "text": "Субдоминанта"}
    ]
  },
  {
    "id": 21,
    "source": "/audio/f-guitar/guitar-f-s.mp3",
    "success": null,
    "key": Keys.F_MAJ,
    "choices": [
      {"is_correct": false, "text": "Тоника"},
      {"is_correct": false, "text": "Доминанта"},
      {"is_correct": true, "text": "Субдоминанта"}
    ]
  },
]

export function getChoices() {
  return tests;
}

export function getKeys() {
  return _(getChoices()).map('key').uniq().value();
}

export function getFuncFromChoice(choice) {
  return _(choice.choices.filter(func => func.is_correct)).head().text;
}
