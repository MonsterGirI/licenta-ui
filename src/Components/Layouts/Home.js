import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';
import DialogRegister from '../Authentification/DialogRegister'
import DialogLogin from '../Authentification/DialogLogin'
import FooterBlack from './FoooterBlack'
import Menu from '../BodyContent/Menu'


const styles = theme => ({

  gridShadow: {
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    marginBottom: 120,
    marginTop: 120,
  },

  BorderWithoutRight: {
    textAlign: 'center',
    backgroundColor: "#F0F0F0",
  },

  root: {
    flexGrow: 1,
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
  },

  boxForMargins: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 15,
    marginRight: theme.spacing.unit * 15,
    marginTop: theme.spacing.unit * 15,

  },

  mainFeaturedPost: {
    backgroundColor: '#212121',
    color: theme.palette.common.white,
    height: 600,
    margin: 'auto',
  },

  mainFeaturedPostContent: {
    textAlign: 'center',
  },

  margin: {
    margin: theme.spacing.unit,
  },

  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});

let colorBlue = "#1E90FF";

const featuredPosts = [
  {
    title: 'Învaţă online',
    date: 'Comfortabil',
    description:
      'Învață de acasă, în pauze sau în cafeneaua ta preferată.',
  },
  {
    title: 'Sarcini interactive',
    date: 'Diversitate',
    description:
      'Poți găsi peste 100 de ore de lecții interactive și clipuri video, indiferent de nivelul tău de cunoștințe.',
  },
  {
    title: 'Începe de la zero',
    date: 'Adaptabilitate',
    description:
      'Poți începe cursurile ca novice, fără să fi învățat ceva anterior.',
  },

];

const newToBeginer = {
  pathname: "/invata/",
  param1: "Ce este Java?"
};
const newToMedium = {
  pathname: "/invata/",
  param1: "Mostenire"
};
const newToAdvance = {
  pathname: "/invata/",
  param1: "Structuri de date"
};

const chaptersDescriptions = [
  {
    title: 'Tutoriale Java',
    dificulty: 'Incepator',
    description:
      'Acest tutorial este destinat incepatorilor care doresc sa invete Java. Aici poti invata cum sa iti instalezi Java, ce inseamna clase, metode, variabile si care este sintaxa de baza al acestui limbaj de programare',
    color: colorBlue,
    goTo: "Beginner",
    newTo: newToBeginer,
  },
  {
    title: 'POO in Java',
    dificulty: '',
    description:
      'Pentru cei care au cunostinte despre programare, acest tutorial o sa va invete cum se aplica principiile programarii orientate pe obiect in Java, precum si ce inseamna Interfetele si Pachetele.',
    color: '#FFF',
    goTo: 'Medium',
    newTo: newToMedium,
  },
  {
    title: 'Tutoriale Avansate',
    dificulty: 'Dificil',
    description:
      'Daca inca nu ai parcurs restul cursurilor, ar fi indicat sa o faci inainte sa incepi acest curs cuprinde Serializarea, Structuri de date, Generice, Colectii si elemente de Web cum ar fi: Retelistica, Applets.',
    color: 'secondary',
    goTo: 'Advanced',
    newTo: newToAdvance,
  },
];


let Img = require('react-image');

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.openRegisterForm = this.openRegisterForm.bind(this);
  };
  state = {
    registerDialogOpen: false,
    loginDialogOpen: false,
    showJavaChapter: false,
  };

  openRegisterForm(dialogName) {
    this.setState({ [dialogName]: true });
  }

  callbackFromDialogLogin(open, openRegisterForm) {
    this.setState({ registerDialogOpen: open, loginDialogOpen: false });
    console.log("called from callbackDialog");
    if (openRegisterForm) {
      console.log(this.state.registerDialogOpen);
      this.setState({ registerDialogOpen: true });
      console.log(this.state.registerDialogOpen);
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  goToChapter(chapter) {
    if (chapter = "Ce este Java?") {
      this.setState({
        showJavaChapter: true,
      });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <Grid container spacing={24}>
            <Grid item xs style={{ height: 64 }} />
          </Grid>
          <Paper className={classes.mainFeaturedPost}>
            <Grid container direction="column" spacing={40} style={{ height: 'inherit', width: 'inherit' }}>
              <Grid item xs></Grid>
              <Grid item xs>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                    Vrei sa inveti Java?
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Cursurile noastre sunt destinate atat novicilor cat si avansatilor. Va asteptam!
                  </Typography>

                  <Button variant="contained" color="secondary" size="large" onClick={() => this.openRegisterForm("loginDialogOpen")} className={classes.margin}>
                    Autentifica-te
                  <img src={require('./Images/arrowIcon2.png')} className={classes.rightIcon} />
                  </Button>
                  {this.state.loginDialogOpen && <DialogLogin open={this.state.loginDialogOpen} callback={(open, openRegistrationForm) => this.callbackFromDialogLogin(open, openRegistrationForm)} />}
                </div>
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </Paper>
          <div className={classes.layout}>
            <Grid container direction="row" className={classes.boxForMargins}>
              <Grid item xs style={{ alignItems: "center" }}>
                <Grid container spacing={24} direction="column" style={{ paddingTop: 30 }}>
                  <Grid item xs={7} >
                    <Typography variant="h4" gutterBottom>
                      Noi va ajutam sa invatati Java
              </Typography>
                  </Grid>
                  <Grid item xs >
                    <Typography variant="h6">
                      Crezi ca nu o sa poti invata niciodata sa programezi? Noi iti punem la dispozitie cursurile necesare pentru a invata Java si a deveni dintr-un novice un expert!
              </Typography>
                  </Grid>
                  <Grid item xs >
                    <Typography variant="h4" gutterBottom>
                      De ce facem asta?
              </Typography>
                  </Grid>
                  <Grid item xs >
                    <Typography variant="h6">
                      Pentru că știm ce oportunitate imensă reprezintă aceste cunoștințe atât pentru cei aflați la început de drum profesional, cât și pentru cei care au curajul să reinvestească efort într-o nouă carieră.
              </Typography>

                  </Grid>
                  <Grid item xs style={{ alignSelf: "center" }}>
                    <Button variant="contained" color="secondary" size="large" className={classes.margin} onClick={() => this.openRegisterForm("registerDialogOpen")}>
                      Inregistreaza-te
                    <img src={require('./Images/arrowIcon2.png')} className={classes.rightIcon} />
                    </Button>
                    {this.state.registerDialogOpen && <DialogRegister open={this.state.registerDialogOpen} callback={(open) => { this.setState({ registerDialogOpen: open }) }} />}
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs>
                <Img src={require('./Images/contentisking.png')} style={{ alignItems: "center", width: 700, height: 500 }} />
              </Grid>
            </Grid>

          </div>
          <div >
            <Grid container spacing={24} style={{ alignItems: "center", justifyContent: "center" }} className={classes.gridShadow}>
              {featuredPosts.map(post => (
                <Grid item xs className={classes.BorderWithoutRight} style={{ height: '200px' }}>
                  <div style={{
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}>
                    <Typography component="h2" variant="h5">
                      {post.title}
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary">
                      {post.date}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>
                  </div>
                </Grid>

              ))}
            </Grid>
          </div>

          <div className={classes.layout} style={{ alignItems: 'center' }}>
            <Grid container spacing={24} direction="row">
              <Grid item xs={2}>

              </Grid>

              <Grid item xs={8}>
                <Grid container spacing={24} direction="column" >
                  {chaptersDescriptions.map(chapter => (
                    <Grid item xs >
                      <div>
                        <Typography variant="h4" gutterBottom>
                          {chapter.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {chapter.dificulty}
                        </Typography>
                        <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
                          {chapter.description}
                        </Typography>
                        <Button variant="contained" color='secondary' component={Link} to={chapter.newTo} size="medium" className={classes.margin}>
                          Incepe
                        <img src={require('./Images/arrowIcon2.png')} className={classes.rightIcon} />
                          {this.state.showJavaChapter ?
                            <Menu chapter={chapter.goTo} /> :
                            null
                          }
                        </Button>
                        <Divider style={{ marginTop: '20px' }} />
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={2}>
              </Grid>
            </Grid>
          </div>
          <FooterBlack />
        </div>
        <Switch>
          <Route path='/invata/' render={(props) => <Menu {...props} test="{this.state.registerDialogOpen}" />} />
        </Switch>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);