import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ainvnt';

  // constructor(
  //   private readonly router: Router,
  //   private readonly titleService: Title
  // ) { }

  // ngOnInit() {
  //   this.router.events.pipe(
  //     filter((event) => event instanceof NavigationEnd)
  //   ).subscribe(() => {
  //     this.titleService.setTitle(this.getNestedRouteTitles().join(' | '));
  //   });
  // }

  // getNestedRouteTitles(): string[] {
  //   let currentRoute = this.router.routerState?.root?.firstChild;
  //   const titles: string[] = [];

  //   while (currentRoute) {
  //     if (currentRoute?.snapshot?.routeConfig?.data?.['title']) {
  //       titles.push(currentRoute.snapshot.routeConfig.data['title']);
  //     }

  //     currentRoute = currentRoute?.firstChild;
  //   }

  //   return titles;
  // }

  // getLastRouteTitle(): string {
  //   let currentRoute = this.router.routerState.root.firstChild;

  //   while (currentRoute?.firstChild) {
  //     currentRoute = currentRoute.firstChild;
  //   }

  //   return currentRoute?.snapshot.data['title'];
  // }

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title) {
  }

  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
      .subscribe(() => {

        var rt = this.getChild(this.activatedRoute);
        rt.data.subscribe((data: { title: string; }) => {
          console.log(data);
          this.titleService.setTitle(data.title + " | " + this.title);
        })
      })

  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }

  }
}
