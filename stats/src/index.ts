import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HTMLReport } from "./reportTargets/HTMLReport";

//create object that satisfies the DataReader interface
const csvFileReader = new CsvFileReader("football.csv");
//create an instance of MatchReader and pass in something
//satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const staticMachreader = MatchReader.fromCsv("football.csv");
staticMachreader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HTMLReport());

summary.buildAndPrintReport(matchReader.matches);

const staticSummary = Summary.winAnalysisWithConsoleReport("Man United");

staticSummary.buildAndPrintReport(matchReader.matches);
staticSummary.buildAndPrintReport(staticMachreader.matches);
