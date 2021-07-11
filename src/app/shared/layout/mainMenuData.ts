import { MainMenu, MenuRole } from 'src/app/_models/admin/main-menu';

export class MainMenuData {
  static menuItems: MenuRole[] = [
      { role: '', menu: [
          {
              link: '',
              icon: 'fas fa-users-cog',
              title: 'Nouvelle Inscription',
              active: false,
              children: [
                  {
                      icon: '',
                      link: '/club/clubs-list',
                      title: 'Equipes',
                      active: false
                  },
                  {
                    icon: '',
                    link: '/joueur/joueurs-list',
                    title: 'Athlètes',
                    active: false
                  },
                  {
                    icon: '',
                    link: '/arbitre/arbires-list',
                    title: 'Arbitres',
                    active: false
                  },
                  {
                    icon: '',
                    link: '/membrefed/membrefeds-list',
                    title: 'Membres Féderation',
                    active: false
                  },
                  
              ]
          },
          {
            link: '',
            icon: 'fas fa-users-cog',
            title: 'Nouvelle Inscription',
            active: false,
            children: [
                {
                    icon: '',
                    link: '/club/clubs-list',
                    title: 'Equipes',
                    active: false
                },
                {
                  icon: '',
                  link: '/joueur/joueurs-list',
                  title: 'Athlètes',
                  active: false
                },
                {
                  icon: '',
                  link: '/arbitre/arbires-list',
                  title: 'Arbitres',
                  active: false
                },
                {
                  icon: '',
                  link: '/membrefed/membrefeds-list',
                  title: 'Membres Féderation',
                  active: false
                },
                
            ]
          }
      ] },
      { role: '', menu: [] }

    ];
}
