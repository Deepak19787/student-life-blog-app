import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { StudyScheduleComponent } from './pages/blog/study-schedule.component';
import { NoteTakingComponent } from './pages/blog/note-taking.component';
import { AvoidProcrastinationComponent } from './pages/blog/avoid-procrastination.component';
import { TimeManagementComponent } from './pages/blog/time-management.component';
import { StressReliefComponent } from './pages/blog/stress-relief.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/study-schedule', component: StudyScheduleComponent },
  { path: 'blog/note-taking', component: NoteTakingComponent },
  { path: 'blog/avoid-procrastination', component: AvoidProcrastinationComponent },
  { path: 'blog/time-management', component: TimeManagementComponent },
  { path: 'blog/stress-relief', component: StressReliefComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
