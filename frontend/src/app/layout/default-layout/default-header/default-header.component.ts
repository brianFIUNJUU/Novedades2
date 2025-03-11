import { Component, computed, DestroyRef, inject, Input, OnInit } from '@angular/core';
import {
  AvatarComponent,
  BadgeComponent,
  BreadcrumbRouterComponent,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ProgressBarDirective,
  ProgressComponent,
  SidebarToggleDirective,
  TextColorDirective,
  ThemeDirective
} from '@coreui/angular';
import { NgStyle, NgTemplateOutlet } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IconDirective } from '@coreui/icons-angular';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { delay, filter, map, tap } from 'rxjs/operators';
import { AuthenticateService } from '../../../services/authenticate.service';
@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.scss'],

  standalone: true,
  imports: [
    ContainerComponent,
    HeaderTogglerDirective,
    SidebarToggleDirective,
    IconDirective,
    HeaderNavComponent,
    RouterLink,
    NgTemplateOutlet,
    BreadcrumbRouterComponent,
    ThemeDirective,
    DropdownComponent,
    DropdownToggleDirective,
    TextColorDirective,
    AvatarComponent,
    DropdownMenuDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    BadgeComponent,
    DropdownDividerDirective,
  
  ]
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {
  readonly #activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;
  readonly #destroyRef: DestroyRef = inject(DestroyRef);

  userName: string = 'Usuario no autenticado'; // Inicializa la variable

  readonly colorModes = [
    { name: 'light', text: 'Light', icon: 'cilSun' },
    { name: 'dark', text: 'Dark', icon: 'cilMoon' },
    { name: 'auto', text: 'Auto', icon: 'cilContrast' }
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return this.colorModes.find(mode => mode.name === currentMode)?.icon ?? 'cilSun';
  });

  constructor(private authService: AuthenticateService, private router: Router) {
    super();
    this.#colorModeService.localStorageItemName.set('coreui-free-angular-admin-template-theme-default');
    this.#colorModeService.eventName.set('ColorSchemeChange');

    this.#activatedRoute.queryParams
      .pipe(
        delay(1),
        map(params => <string>params['theme']?.match(/^[A-Za-z0-9\s]+/)?.[0]),
        filter(theme => ['dark', 'light', 'auto'].includes(theme)),
        tap(theme => {
          this.colorMode.set(theme);
        }),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe();
  }

  ngOnInit() {
    this.authService.getCurrentUser().then((user) => {
      if (user) {
        this.authService.getUsuario(user.uid).subscribe((usuarioData) => {
          if (usuarioData) {
            this.userName = usuarioData.nombre; // Asegúrate de que la propiedad se llama 'nombre'
          } else {
            this.userName = 'Nombre no encontrado';
          }
        });
      } else {
        this.userName = 'Usuario no autenticado';
      }
    });
  }

  @Input() sidebarId: string = 'sidebar1';

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  perfil() {
    this.router.navigate(['/register']);
  }
}
