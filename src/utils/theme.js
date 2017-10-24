export class Theme {
    constructor(root) {
        root.material.registerTheme('default', this.baseTheme)
        root.material.registerTheme('alternative', {
          ...this.baseTheme,
          accent: 'white',
        })
    }
    baseTheme = {
        primary: {
          color: 'blue-grey',
          hue: 500
        },    
        accent: {
          color: 'amber',
          hue: 900
        },
        warn: 'deep-orange',
        background: {
          color: 'grey',
          hue: 100
        } 
      }
      
}