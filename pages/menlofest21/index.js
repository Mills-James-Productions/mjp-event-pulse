import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import _ from 'lodash';
import { getEventMeta } from 'lib/api';
import { Grid } from '@material-ui/core';
import FullWrap from 'components/FullWrap';
import Meta from 'components/globals/Meta';
import Page from 'components/template1/Page';
import Body from 'components/template1/Body';
import Video__StickyTop__WithCountdown from 'components/VideoBoxes/Video__StickyTop__WithCountdown';
import FlexHero from 'components/Heroes/FlexHero';
import Fluid__iFrame from 'components/iFrames/Fluid__iFrame';
import Counter__JustNumbers from 'components/Counters/Counter__JustNumbers';
import Footer from 'components/template1/Footer';
import Section from 'components/template1/Section';
import PasswordAuthModal from '../../components/Modals/PasswordAuthModal';

import { toast } from 'react-toastify';
export var event_theme = {
  h1: {
    fontSize: '5rem',
  },
  primaryColor: '#181818',
  secondaryColor: '#97d700',
  heroHeight: '350px',
  green: '#97d700',
  white: null,
  blue: '#1e2c60',
  red: '#b71f39',
  purple: '#b1c6e6',
  brown: '#7c5437',
  fontFamily: 'Akzidenz-Grotesque-Bold',
  footerBg: '#b1c6e6',
  headerOpacity: '0',
  videoBreakPoint: 700,
  buttonInfoColor: null,
  buttonSuccessColor: null,
  buttonDangerColor: 'tomato',
  buttonColor: null,
  headerFont: 'Akzidenz-Grotesque-Bold',
  headerFontColor: 'white',
  headerBgColor: '#b1c6e6',
  maxSectionWidth: '1800px',
};

const PLACEHOLD = 'https://placehold.co/';
export const EVENT_URL = 'menlofest21';
const Index = (props) => {
  const session_token = EVENT_URL;
  const router = useRouter();

  const {
    event_meta,
    main_event,
    event_meta: { AuthRequired },
    main_event: { BreakoutSessions },
  } = props;

  event_theme = {
    ...event_theme,
    header_image: main_event?.HeaderImage?.url || PLACEHOLD + '1920x350',
  };

  const calculateIfStarted = () => {
    let now = new Date();
    const parsed_event_start = Date.parse(
      main_event.eventStartEnd.StartDateTime
    );

    let calc_time = parsed_event_start - now;

    if (calc_time <= 0) {
      return true;
    }
    return false;
  };

  const [hasStarted, setStarted] = useState(calculateIfStarted());

  const [hasAuthenticated, setHasAuthenticated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setStarted(calculateIfStarted());
    }, 1000);

    const storage_auth = sessionStorage.getItem(session_token);

    if (storage_auth === 'true') {
      setHasAuthenticated(true);
    } else {
      setHasAuthenticated(false);
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <PasswordAuthModal
        eventId={main_event.id}
        open={!hasAuthenticated}
        event_name={main_event.EventName}
        headerContent={
          <img
            style={{
              margin: 'auto',
              height: '150px',
              width: 'auto',
              padding: '1rem',
            }}
            src={`https://storage.googleapis.com/mjp-stream-public/menlofest21/logo-size.png`}
          />
        }
        callback={(creds) => {
          setHasAuthenticated(true);
          sessionStorage.setItem(session_token, true);
          toast.success(creds);
        }}
      />
      <FullWrap className={hasAuthenticated ? '' : 'blurred'}>
        <Page theme={event_theme}>
          <Meta title={event_meta.EventJobName}> </Meta>
          <FlexHero
            hasStarted={hasStarted}
            title={event_meta.EventJobName}
            bgColor={event_theme.purple}
          >
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://storage.googleapis.com/mjp-stream-public/menlofest21/logo-size.png"
                alt="logo"
              />
            </div>
            <div>
              <center>
                <img
                  style={{ width: '100%', maxWidth: '350px', margin: 'auto' }}
                  src={main_event.KeyValue[0]?.value}
                />

                <h2 style={{ margin: 'auto' }}>
                  Text <span style={{ color: event_theme.brown }}> MENLO</span>{' '}
                  to 71760
                </h2>
                <h2 style={{ margin: 'auto' }}>
                  <i> To sign up for live bidding</i>
                </h2>
              </center>
            </div>
            <div>
              <center>
                <div
                  style={{
                    fontSize: '1.5rem',
                    backgroundColor: event_theme.brown,
                    padding: '1rem 0',
                    fontFamily: 'Ace Sans',
                  }}
                ></div>
              </center>
            </div>
          </FlexHero>

          <Body>
            <Section>
              <Grid container spacing={3}>
                <Grid item={true} md={8} sm={12} xs={12}>
                  <div
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    {hasAuthenticated ? (
                      <Video__StickyTop__WithCountdown
                        showMinutesBefore={195}
                        start={main_event.eventStartEnd.StartDateTime}
                        isStarted={true}
                        src={
                          main_event.streamLinks.find(
                            (link) => link.isMain === true
                          ).url
                        }
                        showBefore={
                          <div
                            style={{
                              position: 'relative',
                              paddingBottom: '56.25%',
                              width: '100%',
                            }}
                          >
                            <div
                              style={{
                                top: '0',
                                left: '0',
                                position: 'absolute',
                                height: '100%',
                                zIndex: '100',
                                width: '100%',
                                backgroundColor: '#181818',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                color: 'white',
                              }}
                            >
                              <div
                                style={{
                                  margin: 'auto',
                                  maxWidth: '50%',
                                  fontSize: '1.5rem',
                                  textAlign: 'center',
                                  fontFamily: 'Hanoded',
                                }}
                              >
                                <p
                                  style={{
                                    fontFamily: 'Hanoded',
                                    fontWeight: '800',
                                  }}
                                >
                                  The event hasn't started yet.
                                </p>
                                <p
                                  style={{
                                    fontFamily: 'Ace Sans',
                                  }}
                                >
                                  Check back in
                                  <Counter__JustNumbers
                                    start={
                                      main_event.eventStartEnd.StartDateTime
                                    }
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        }
                      />
                    ) : (
                      ''
                    )}
                  </div>
                </Grid>
                <Grid item={true} md={4} xs={12}>
                  <Fluid__iFrame
                    src={main_event.streamLinks[1].url}
                    minHeight={`500px`}
                  />
                </Grid>
                <Grid item md={8} xs={12}>
                  <div style={{ textAlign: 'center' }}>
                    <h4> Slow Connection?</h4>
                    <a href={main_event.streamLinks[2].url} target="_blank">
                      <button> Click Here</button>
                    </a>
                  </div>
                </Grid>

                <Grid item md={4} xs={12}>
                  <div style={{ textAlign: 'center' }}>
                    <h4> Need Help Bidding?</h4>
                    <a href={`#how-to-bid`}>
                      <button>How To Bid</button>
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Section>
            <Section>
              <div
                id={`how-to-bid`}
                style={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  margin: 'auto',
                }}
              >
                <div
                  style={{
                    width: 'calc(50% - 2rem)',
                    margin: '1rem',
                    minWidth: '500px',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                    }}
                    src="https://storage.googleapis.com/mjp-stream-public/menlofest21/Slide1.PNG"
                    alt="how to bid"
                    srcset=""
                  />
                </div>
                <div
                  style={{
                    width: 'calc(50% - 2rem)',
                    margin: '1rem',
                    minWidth: '500px',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                    }}
                    src="https://storage.googleapis.com/mjp-stream-public/menlofest21/Slide2.PNG"
                    alt="how to bid"
                    srcset=""
                  />
                </div>
              </div>
            </Section>
          </Body>
          <Footer></Footer>
        </Page>
      </FullWrap>
    </>
  );
};

export async function getStaticProps(ctx) {
  let eventData = await getEventMeta(EVENT_URL);

  let main_event = eventData.events.filter((ev) => ev.isMainEvent === true)[0];

  if (eventData.eventStatus.EventStatus === 'Ended') {
    return {
      redirect: {
        destination: `${EVENT_URL}/thank-you`,
        permanent: false,
      },
    };
  }
  return {
    props: {
      //meta will be the props for the event
      event_meta: eventData,
      main_event,
    },
    revalidate: 1800,
  };
}

export default Index;
