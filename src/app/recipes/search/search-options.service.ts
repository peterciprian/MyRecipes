import { Injectable } from '@angular/core';
import { distinctUntilKeyChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchOptionsService {

  constructor() { }

  public ingredents = ['mustár', 'olívaolaj', 'napraforgóolaj', 'ételecet', 'balzsamecet', 'fehérborecet',
    'búzafinomliszt', 'rétesliszt', 'kukoricaliszt', 'búzadara', 'kuszkusz', 'sütőpor', 'szódabikarbóna',
    'élesztő', 'barnacukor', 'kristálycukor', 'porcukor', 'tengeri só', 'főzősó', 'zabpehely', 'aszalt datolya',
    'aszalt füge', 'aszalt szilva', 'mazsola', 'spagetti', 'cérnametélt', 'hosszúmetélt', 'penne', 'farfalle',
    'tarhonya', 'rizs', 'fekete olajbogyó', 'zöld olajbogyó', 'dió', 'fenyőmag', 'mandula', 'lencse', 'bab',
    'sárgaborsó', 'csicseriborsó', 'paradicsomkonzerv', 'aszalt paradicsom', 'szárított gomba', 'csokoládé',
    'kakaópor', 'szójaszósz', 'szardella', 'kapribogyó,bazsalikom', 'oreganó', 'rozmaring', 'kakukkfű',
    'bors', 'kömény', 'szegfűszeg', 'fahéj', 'koriander', 'mustármag', 'szerecsendió', 'pirospaprika',
    'babérlevél', 'curry', 'kurkuma', 'menta', 'majoránna'];

  public months = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus',
    'szeptember', 'október', 'november', 'december'];

  public types = ['leves', 'sült', 'tészta', 'sütemény', 'ragu', 'desszert', 'saláta', 'egytál étel',
    'főzelék', 'feltét', 'húsétel', 'édes sütemény', 'sós sütemény', 'pörkölt', 'torta', 'pizza',
    'lekvár, jam', 'köret', 'halétel', 'kenyérféle', 'szendvics', 'szósz', 'befőtt', 'édesség', 'péksütemény',
    'ital', 'savanyúság', 'töltött zöldség', 'rakott étel', 'felfújt', 'ital'];

  public lackings = ['cukor', 'tej', 'tojás', 'hús', 'hal', 'glutén', 'diófélék', 'mogyoró', 'mustár', 'laktóz',
    'gomba', 'mazsola', 'sajt', 'rákfélék', 'szója', 'zeller', 'szezámmag', 'szulfitok', 'puhatestűek', 'finomított szénhidrát'];

  public temperatures = ['sült', 'főtt', 'nyers'];

  public units = ['kg', 'dkg', 'g', 'l', 'dl', 'ml', 'csipet', 'evőkanál', 'kiskanál', 'rúd', 'marék', 'tábla'];
}
