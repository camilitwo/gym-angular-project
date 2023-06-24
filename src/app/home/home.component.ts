import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor() {}


  ngOnInit(): void {
    this.selectedDay = this.getCurrentDay();
    this.mostrarRutina();
  }

  getCurrentDay(): string {
    const daysOfWeek = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    const currentDate = new Date();
    return daysOfWeek[currentDate.getDay()-1];
  }

  exerciseRoutine: any[]  = [
    {
        "dia":"Lunes",
        "nombre": "Día 1: Pecho y Tríceps",
        "ejercicios": [
          {
            "nombre": "Press de banca plano",
            "series": 3,
            "repeticiones": "8-10",
            "explicacion": "El press de banca plano es un ejercicio clásico para trabajar el pecho. Acuéstate en un banco plano y levanta la barra desde el pecho hasta que los brazos estén extendidos. Luego baja la barra lentamente hacia el pecho."
          },
          {
            "nombre": "Press de banca inclinado con mancuernas",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "El press de banca inclinado con mancuernas es similar al press de banca plano, pero se realiza en un banco inclinado. Sostén una mancuerna en cada mano y levántalas desde el pecho hasta que los brazos estén extendidos. Luego baja las mancuernas lentamente hacia el pecho."
          },
          {
            "nombre": "Extensiones de tríceps con polea alta",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "Las extensiones de tríceps con polea alta son un ejercicio efectivo para trabajar los tríceps. Coloca un mango en la polea alta, agárralo con las dos manos y extiende los brazos hacia abajo hasta que estén completamente estirados. Luego flexiona los codos y vuelve a la posición inicial."
          },
          {
            "nombre": "Dips en máquina asistida o dips en banco",
            "series": 3,
            "repeticiones": "8-10",
            "explicacion": "Los dips son un ejercicio para trabajar los tríceps y los músculos del pecho. Colócate entre las barras paralelas de una máquina asistida o de un banco, con las manos sujetando las barras. Baja el cuerpo flexionando los brazos y luego sube empujando con los tríceps."
          },
          {
            "nombre": "Press cerrado con mancuernas",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "El press cerrado con mancuernas es un ejercicio para trabajar los tríceps. Acuéstate en un banco plano con una mancuerna en cada mano. Levanta las mancuernas desde el pecho hasta que los brazos estén extendidos. Luego baja las mancuernas lentamente hacia el pecho."
          }
        ]
      },
      {
        "dia":"Martes",
        "nombre": "Día 2: Piernas",
        "ejercicios": [
          {
            "nombre": "Sentadillas",
            "series": 3,
            "repeticiones": "8-10",
            "explicacion": "Las sentadillas son un ejercicio básico para trabajar los músculos de las piernas y glúteos. Colócate de pie con los pies separados al ancho de los hombros. Flexiona las rodillas y baja el cuerpo como si fueras a sentarte en una silla, manteniendo la espalda recta. Luego, extiende las piernas y vuelve a la posición inicial."
          },
          {
            "nombre": "Prensa de piernas",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "La prensa de piernas es un ejercicio que se realiza en una máquina específica. Siéntate en la máquina con los pies apoyados en la plataforma. Empuja la plataforma hacia arriba con los pies hasta que las piernas estén extendidas. Luego, flexiona las piernas y baja la plataforma hacia ti."
          },
          {
            "nombre": "Extensiones de piernas",
            "series": 3,
            "repeticiones": "12-15",
            "explicacion": "Las extensiones de piernas se realizan en una máquina de extensión de piernas. Siéntate en la máquina con las piernas dobladas y los pies en los soportes. Extiende las piernas hacia adelante levantando el peso hasta que las piernas estén rectas. Luego, flexiona las piernas y baja el peso hacia abajo."
          },
          {
            "nombre": "Zancadas con mancuernas",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "Las zancadas con mancuernas son un ejercicio para trabajar las piernas y glúteos. Sostén una mancuerna en cada mano. Da un paso hacia adelante con una pierna y flexiona las rodillas para que la pierna trasera quede cerca del suelo. Luego, empuja con la pierna delantera para volver a la posición inicial. Alterna las piernas en cada repetición."
          },
          {
            "nombre": "Elevaciones de talones de pie",
            "series": 3,
            "repeticiones": "12-15",
            "explicacion": "Las elevaciones de talones de pie son un ejercicio para trabajar los músculos de la pantorrilla. Párate con los pies separados al ancho de los hombros. Levanta los talones para elevar los pies lo más alto posible y luego baja los talones hasta que estén casi tocando el suelo."
          }
        ]
      },
      {
        "dia":"Miércoles",
        "nombre": "Día 3: Espalda y Bíceps",
        "ejercicios": [
          {
            "nombre": "Dominadas o jalones al pecho",
            "series": 3,
            "repeticiones": "8-10",
            "explicacion": "Las dominadas o jalones al pecho son ejercicios para trabajar los músculos de la espalda y los brazos. Para las dominadas, cuelga de una barra con las palmas hacia adelante y el cuerpo extendido. Luego, levántate hasta que tu barbilla esté por encima de la barra y baja lentamente. Para los jalones al pecho, siéntate en una máquina con los brazos extendidos y agarra la barra con las palmas hacia adelante. Tira de la barra hacia abajo hasta que esté cerca del pecho y luego vuelve a la posición inicial."
          },
          {
            "nombre": "Remo con barra",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "El remo con barra es un ejercicio para trabajar los músculos de la espalda. Párate con las rodillas ligeramente flexionadas y agarra la barra con las manos separadas al ancho de los hombros. Inclínate hacia adelante desde la cintura manteniendo la espalda recta. Luego, levanta la barra hacia el abdomen manteniendo los codos cerca del cuerpo y baja lentamente."
          },
          {
            "nombre": "Remo con mancuerna a una mano",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "El remo con mancuerna a una mano es un ejercicio para trabajar los músculos de la espalda. Párate con una rodilla y una mano apoyadas en un banco. Sostén una mancuerna en la otra mano con el brazo extendido. Luego, levanta la mancuerna hacia el pecho manteniendo el codo cerca del cuerpo y baja lentamente."
          },
          {
            "nombre": "Curl de bíceps con barra",
            "series": 3,
            "repeticiones": "8-10",
            "explicacion": "El curl de bíceps con barra es un ejercicio para trabajar los músculos de los brazos. Párate con los pies separados al ancho de los hombros y agarra la barra con las manos separadas al ancho de los hombros, palmas hacia adelante. Flexiona los codos y levanta la barra hacia los hombros manteniendo los codos cerca del cuerpo. Luego, baja lentamente la barra hasta la posición inicial."
          },
          {
            "nombre": "Curl de martillo con mancuernas",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "El curl de martillo con mancuernas es un ejercicio para trabajar los músculos de los brazos. Párate con los pies separados al ancho de los hombros y sostén una mancuerna en cada mano con las palmas enfrentadas entre sí. Flexiona los codos y levanta las mancuernas hacia los hombros manteniendo los codos cerca del cuerpo. Luego, baja lentamente las mancuernas hasta la posición inicial."
          }
        ]
      },
      {
        "dia":"Jueves",
        "nombre": "Día 4: Hombros y Trapecios",
        "ejercicios": [
          {
            "nombre": "Press militar con barra",
            "series": 3,
            "repeticiones": "8-10",
            "explicacion": "El press militar con barra es un ejercicio para trabajar los músculos de los hombros. Párate con los pies separados al ancho de los hombros y agarra la barra con las manos separadas al ancho de los hombros, palmas hacia adelante. Levanta la barra desde los hombros hasta que los brazos estén extendidos sobre la cabeza. Luego, baja lentamente la barra hasta la posición inicial."
          },
          {
            "nombre": "Elevaciones laterales con mancuernas",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "Las elevaciones laterales con mancuernas son ejercicios para trabajar los músculos de los hombros. Párate con los pies separados al ancho de los hombros y sostén una mancuerna en cada mano con los brazos extendidos a los lados. Levanta las mancuernas hacia los lados hasta que los brazos estén paralelos al suelo. Luego, baja lentamente las mancuernas hasta la posición inicial."
          },
          {
            "nombre": "Elevaciones frontales con mancuernas",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "Las elevaciones frontales con mancuernas son ejercicios para trabajar los músculos de los hombros. Párate con los pies separados al ancho de los hombros y sostén una mancuerna en cada mano con los brazos extendidos al frente. Levanta las mancuernas hacia adelante hasta que los brazos estén paralelos al suelo. Luego, baja lentamente las mancuernas hasta la posición inicial."
          },
          {
            "nombre": "Pájaros o elevaciones posteriores con mancuernas",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "Los pájaros o elevaciones posteriores con mancuernas son ejercicios para trabajar los músculos de los hombros y la espalda. Párate con los pies separados al ancho de los hombros y sostén una mancuerna en cada mano con los brazos extendidos hacia abajo. Levanta las mancuernas hacia los lados y hacia atrás, manteniendo los brazos rectos, hasta que sientas la contracción en los hombros y la espalda. Luego, baja lentamente las mancuernas hasta la posición inicial."
          },
          {
            "nombre": "Encogimientos de trapecio con barra",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "Los encogimientos de trapecio con barra son ejercicios para trabajar los músculos del trapecio. Párate con los pies separados al ancho de los hombros y agarra la barra con las manos separadas al ancho de los hombros. Levanta los hombros hacia las orejas, contrayendo los músculos del trapecio, y luego baja los hombros lentamente hasta la posición inicial."
          }
        ]
      },
      {
        "dia":"Viernes",
        "nombre": "Día 5: Piernas y Glúteos",
        "ejercicios": [
          {
            "nombre": "Peso muerto con barra",
            "series": 3,
            "repeticiones": "8-10",
            "explicacion": "El peso muerto con barra es un ejercicio compuesto que trabaja principalmente los músculos de la espalda baja, glúteos y piernas. Coloca la barra frente a ti, agáchate y agárrala con las manos separadas al ancho de los hombros. Levanta la barra manteniendo la espalda recta y extendiendo las piernas y las caderas. Luego, baja la barra de manera controlada hasta el suelo."
          },
          {
            "nombre": "Sentadillas sumo con mancuerna",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "Las sentadillas sumo con mancuerna son una variante de las sentadillas que enfatizan los músculos internos de los muslos y los glúteos. Coloca una mancuerna entre tus piernas, con los pies más anchos que el ancho de los hombros y los dedos de los pies apuntando hacia afuera. Flexiona las rodillas y las caderas para bajar el cuerpo hacia abajo, manteniendo la espalda recta. Luego, vuelve a la posición inicial empujando a través de los talones."
          },
          {
            "nombre": "Prensa de piernas inclinada",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "La prensa de piernas inclinada es un ejercicio que se realiza en una máquina de prensa y trabaja los músculos de las piernas, especialmente los cuádriceps. Siéntate en la máquina con la espalda bien apoyada en el respaldo y los pies en la plataforma. Empuja la plataforma hacia arriba extendiendo las piernas y luego baja la plataforma controladamente hasta la posición inicial."
          },
          {
            "nombre": "Elevaciones de talones sentado",
            "series": 3,
            "repeticiones": "12-15",
            "explicacion": "Las elevaciones de talones sentado son un ejercicio para trabajar los músculos de la pantorrilla. Siéntate en una máquina específica para este ejercicio con las rodillas dobladas y los pies apoyados en la plataforma. Levanta los talones lo más alto que puedas contrayendo los músculos de la pantorrilla y luego baja lentamente los talones hasta la posición inicial."
          },
          {
            "nombre": "Hip thrust con barra o elevaciones de cadera con banda elástica",
            "series": 3,
            "repeticiones": "10-12",
            "explicacion": "El hip thrust con barra o las elevaciones de cadera con banda elástica son ejercicios para trabajar los glúteos y los músculos de la cadera. Para el hip thrust con barra, siéntate en el suelo con la espalda apoyada en un banco y coloca la barra sobre tus caderas. Levanta las caderas hacia arriba contrayendo los glúteos y luego baja lentamente hasta la posición inicial. Para las elevaciones de cadera con banda elástica, coloca una banda elástica alrededor de tus piernas, justo por encima de las rodillas. Acuéstate en el suelo con las rodillas dobladas y los pies apoyados. Levanta las caderas hacia arriba y separa las rodillas presionando contra la resistencia de la banda elástica. Luego, baja las caderas de manera controlada hasta la posición inicial."
          }
        ]
  }
]

  dietaJSON = {
    "dias": [
      {
        "nombre": "Día 1",
        "comidas": [
          {
            "nombre": "Desayuno",
            "alimentos": [
              "Omelette de claras de huevo con espinacas y champiñones",
              "1 rebanada de pan integral",
              "1 porción de fruta fresca"
            ],
            "calorias": 400
          },
          {
            "nombre": "Almuerzo",
            "alimentos": [
              "Ensalada de pollo a la parrilla con lechuga, tomate, pepino y aderezo bajo en grasa",
              "1/2 taza de arroz integral",
              "1 porción de verduras al vapor"
            ],
            "calorias": 450
          },
          {
            "nombre": "Merienda",
            "alimentos": [
              "Yogur griego bajo en grasa con nueces y una pizca de canela"
            ],
            "calorias": 200
          },
          {
            "nombre": "Cena",
            "alimentos": [
              "Salmón a la parrilla con limón",
              "1/2 taza de quinua",
              "1 porción de vegetales asados"
            ],
            "calorias": 380
          }
        ]
      },
      {
        "nombre": "Día 2",
        "comidas": [
          {
            "nombre": "Desayuno",
            "alimentos": [
              "Batido de proteínas con leche descremada, espinacas, plátano y mantequilla de maní",
              "1 porción de fruta fresca"
            ],
            "calorias": 350
          },
          {
            "nombre": "Almuerzo",
            "alimentos": [
              "Pollo al horno con hierbas y especias",
              "Ensalada mixta con vegetales variados y vinagreta baja en grasa",
              "1 porción de verduras al vapor"
            ],
            "calorias": 400
          },
          {
            "nombre": "Merienda",
            "alimentos": [
              "Barra de proteínas"
            ],
            "calorias": 180
          },
          {
            "nombre": "Cena",
            "alimentos": [
              "Ensalada de salmón ahumado con espinacas, aguacate y tomate",
              "1 rebanada de pan integral"
            ],
            "calorias": 320
          }
        ]
      },
      {
        "nombre": "Día 3",
        "comidas": [
          {
            "nombre": "Desayuno",
            "alimentos": [
              "Avena cocida con leche descremada, canela y nueces",
              "1 porción de fruta fresca"
            ],
            "calorias": 350
          },
          {
            "nombre": "Almuerzo",
            "alimentos": [
              "Pechuga de pollo a la plancha con especias",
              "1/2 taza de quinua",
              "1 porción de verduras al vapor"
            ],
            "calorias": 400
          },
          {
            "nombre": "Merienda",
            "alimentos": [
              "Rodajas de pepino con hummus"
            ],
            "calorias": 150
          },
          {
            "nombre": "Cena",
            "alimentos": [
              "Ensalada de atún con lechuga, tomate, cebolla morada y aceite de oliva",
              "1/2 taza de arroz integral"
            ],
            "calorias": 380
          }
        ]
      },
      {
        "nombre": "Día 4",
        "comidas": [
          {
            "nombre": "Desayuno",
            "alimentos": [
              "Tortilla de claras de huevo con espinacas y tomate",
              "1 rebanada de pan integral",
              "1 porción de fruta fresca"
            ],
            "calorias": 400
          },
          {
            "nombre": "Almuerzo",
            "alimentos": [
              "Ensalada de salmón a la parrilla con espinacas, aguacate y aderezo bajo en grasa",
              "1/2 taza de quinua",
              "1 porción de verduras al vapor"
            ],
            "calorias": 450
          },
          {
            "nombre": "Merienda",
            "alimentos": [
              "Batido de proteínas con leche descremada y frutas mixtas"
            ],
            "calorias": 300
          },
          {
            "nombre": "Cena",
            "alimentos": [
              "Pechuga de pollo al horno con limón y hierbas",
              "1/2 taza de arroz integral",
              "1 porción de vegetales asados"
            ],
            "calorias": 380
          }
        ]
      },
      {
        "nombre": "Día 5",
        "comidas": [
          {
            "nombre": "Desayuno",
            "alimentos": [
              "Panqueques de avena con claras de huevo y plátano",
              "1 porción de fruta fresca"
            ],
            "calorias": 380
          },
          {
            "nombre": "Almuerzo",
            "alimentos": [
              "Ensalada de camarones con lechuga, tomate, pepino y aderezo bajo en grasa",
              "1/2 taza de quinua",
              "1 porción de verduras al vapor"
            ],
            "calorias": 420
          },
          {
            "nombre": "Merienda",
            "alimentos": [
              "Yogur griego bajo en grasa con semillas de chía y frutas mixtas"
            ],
            "calorias": 200
          },
          {
            "nombre": "Cena",
            "alimentos": [
              "Filete de pescado a la parrilla con limón y especias",
              "Ensalada de espinacas, aguacate y tomate",
              "1 rebanada de pan integral"
            ],
            "calorias": 350
          }
        ]
      }
    ]
  };

  diasSemana: string[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
  selectedDay: string | undefined;
  filteredExercises: any[] = [];

  mostrarRutina() {
    if (this.selectedDay) {
      const selectedRoutine = this.exerciseRoutine.find(routine => routine.dia === this.selectedDay);
      if (selectedRoutine) {
        this.filteredExercises = selectedRoutine.ejercicios;
      } else {
        this.filteredExercises = [];
        Swal.fire({
          title: 'No se encontró información',
          icon: 'error',
          confirmButtonText: 'Cerrar'
        });
      }
    } else {
      this.filteredExercises = [];
    }
  }

  mostrarExplicacion(explicacion: string) {

    Swal.fire({
      title: 'Explicación del ejercicio',
      text: explicacion,
      icon: 'info',
      confirmButtonText: 'Cerrar'
    });
  }

  marcarEjercicioRealizado(ejercicio: any) {
    ejercicio.completado = true;
  }

  marcarEjercicioNoRealizado(ejercicio: any) {
    ejercicio.completado = false;
  }


}
