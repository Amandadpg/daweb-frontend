import { Routes } from '@angular/router';
import { AlumnoDetail } from '../components/alumno-detail/alumno-detail';
import { Alumnos } from '../components/alumnos/alumnos';
import { AsignaturaDetail } from '../components/asignatura-detail/asignatura-detail';
import { Asignaturas } from '../components/asignaturas/asignaturas';
import { Landing } from '../components/landing/landing';
import { MatriculaDetail } from '../components/matricula-detail/matricula-detail';
import { Matriculas } from '../components/matriculas/matriculas';
import { ProfesorDetail } from '../components/profesor-detail/profesor-detail';
import { Profesores } from '../components/profesores/profesores';
import { MatriculasAprobadas } from '../components/matriculas-aprobadas/matriculas-aprobadas';
import { TablaAlumno } from '../components/tabla-alumno/tabla-alumno';

export const routes: Routes = [

    { path: '', component: Landing },
    { path: 'inicio', component: Landing },
    { path: 'alumnos', component: Alumnos },
    { path: 'profesores', component: Profesores },
    { path: 'asignaturas', component: Asignaturas },
    { path: 'matriculas', component: Matriculas },
    { path: 'matricula/:id', component: MatriculaDetail },
    { path: 'profesor/:id', component: ProfesorDetail },
    { path: 'asignatura/:id', component: AsignaturaDetail },
    { path: 'alumno/:id', component: AlumnoDetail },
    { path: 'matriculas-aprobadas', component: MatriculasAprobadas },
    { path: 'tabla-alumno', component: TablaAlumno }


];
