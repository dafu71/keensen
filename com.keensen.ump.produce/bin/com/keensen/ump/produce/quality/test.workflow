<?xml version="1.0" encoding="UTF-8"?>
<workflowProcess productVersion="6.1" schemaVersion="6.0">
  <processHeader>
    <processBasicInfo>
      <processId>com.keensen.ump.produce.quality.test</processId>
      <processName>test</processName>
      <priority>60</priority>
      <author>dafu</author>
      <department></department>
      <description></description>
    </processBasicInfo>
    <dataFields/>
    <triggerEvents/>
    <timeLimit>
      <isTimeLimitSet>false</isTimeLimitSet>
      <calendarSet>
        <initType>appoint</initType>
        <calendarInfo>
          <resourceType>business-calendar</resourceType>
          <resourceID>default</resourceID>
          <resourceName>默认日历</resourceName>
          <parameters/>
        </calendarInfo>
      </calendarSet>
    </timeLimit>
    <procStarterLists>
      <processStarterType>all</processStarterType>
    </procStarterLists>
    <parameters/>
    <splitTransaction>false</splitTransaction>
    <longProcess>true</longProcess>
    <bizEntityInfo/>
    <calendarInfo>
      <resourceType>business-calendar</resourceType>
      <resourceID>default</resourceID>
      <resourceName>默认日历</resourceName>
      <parameters/>
    </calendarInfo>
  </processHeader>
  <transitions>
    <transition>
      <from>startActivity</from>
      <to>manualActivity</to>
      <isDefault>true</isDefault>
      <priority>60</priority>
      <displayName></displayName>
      <type>simpleCondition</type>
      <bendPoints/>
    </transition>
    <transition>
      <from>manualActivity</from>
      <to>manualActivity1</to>
      <isDefault>true</isDefault>
      <priority>60</priority>
      <displayName></displayName>
      <type>simpleCondition</type>
      <bendPoints/>
    </transition>
    <transition>
      <from>manualActivity1</from>
      <to>manualActivity2</to>
      <isDefault>true</isDefault>
      <priority>60</priority>
      <displayName></displayName>
      <type>simpleCondition</type>
      <bendPoints/>
    </transition>
    <transition>
      <from>manualActivity2</from>
      <to>finishActivity</to>
      <isDefault>true</isDefault>
      <priority>60</priority>
      <displayName></displayName>
      <type>simpleCondition</type>
      <bendPoints/>
    </transition>
  </transitions>
  <activities>
    <activity>
      <activityId>startActivity</activityId>
      <activityName>开始</activityName>
      <description></description>
      <splitType>XOR</splitType>
      <joinType>XOR</joinType>
      <priority>60</priority>
      <activityType>start</activityType>
      <splitTransaction>false</splitTransaction>
      <implementation>
        <startActivity>
          <formFields/>
        </startActivity>
      </implementation>
      <isStartActivity>true</isStartActivity>
      <nodeGraphInfo>
        <color>16777215</color>
        <height>28</height>
        <width>28</width>
        <x>100</x>
        <y>150</y>
        <lookAndFeel>classic</lookAndFeel>
        <fontName>System</fontName>
        <fontSize>12</fontSize>
        <fontWidth>550</fontWidth>
        <foreColor>0</foreColor>
        <isItalic>0</isItalic>
        <isUnderline>0</isUnderline>
        <textHeight>60</textHeight>
      </nodeGraphInfo>
    </activity>
    <activity>
      <activityId>finishActivity</activityId>
      <activityName>结束</activityName>
      <description></description>
      <splitType>XOR</splitType>
      <joinType>XOR</joinType>
      <priority>60</priority>
      <activityType>finish</activityType>
      <splitTransaction>false</splitTransaction>
      <activateRule>
        <activateRuleType>directRunning</activateRuleType>
      </activateRule>
      <isStartActivity>false</isStartActivity>
      <nodeGraphInfo>
        <color>16777215</color>
        <height>28</height>
        <width>28</width>
        <x>690</x>
        <y>150</y>
        <lookAndFeel>classic</lookAndFeel>
        <fontName>System</fontName>
        <fontSize>12</fontSize>
        <fontWidth>550</fontWidth>
        <foreColor>0</foreColor>
        <isItalic>0</isItalic>
        <isUnderline>0</isUnderline>
        <textHeight>60</textHeight>
      </nodeGraphInfo>
    </activity>
    <activity>
      <activityId>manualActivity</activityId>
      <activityName>人工活动</activityName>
      <description></description>
      <splitType>XOR</splitType>
      <joinType>XOR</joinType>
      <priority>60</priority>
      <activityType>manual</activityType>
      <splitTransaction>false</splitTransaction>
      <activateRule>
        <activateRuleType>directRunning</activateRuleType>
      </activateRule>
      <implementation>
        <manualActivity>
          <allowAgent>true</allowAgent>
          <customURL>
            <isSpecifyURL>false</isSpecifyURL>
            <urlType>presentation-logic</urlType>
          </customURL>
          <resetUrl>
            <isSpecifyURL>false</isSpecifyURL>
            <urlType>presentation-logic</urlType>
          </resetUrl>
          <participants>
            <participantType>process-starter</participantType>
            <specialActivityID></specialActivityID>
            <specialPath></specialPath>
          </participants>
          <formFields/>
          <timeLimit>
            <isTimeLimitSet>false</isTimeLimitSet>
            <calendarSet>
              <initType>appoint</initType>
              <calendarInfo>
                <resourceType>business-calendar</resourceType>
                <resourceID>default</resourceID>
                <resourceName>默认日历</resourceName>
                <parameters/>
              </calendarInfo>
            </calendarSet>
          </timeLimit>
          <multiWorkItem>
            <isMulWIValid>false</isMulWIValid>
            <workitemNumStrategy>participant-number</workitemNumStrategy>
            <finishRule>all</finishRule>
            <isAutoCancel>false</isAutoCancel>
            <sequentialExecute>false</sequentialExecute>
          </multiWorkItem>
          <triggerEvents/>
          <rollBack/>
          <freeFlowRule>
            <isFreeActivity>false</isFreeActivity>
            <freeRangeStrategy>freeWithinProcess</freeRangeStrategy>
            <isOnlyLimitedManualActivity>false</isOnlyLimitedManualActivity>
          </freeFlowRule>
          <resetParticipant>originalParticipant</resetParticipant>
        </manualActivity>
      </implementation>
      <isStartActivity>false</isStartActivity>
      <nodeGraphInfo>
        <color>16777215</color>
        <height>28</height>
        <width>28</width>
        <x>235</x>
        <y>150</y>
        <lookAndFeel>classic</lookAndFeel>
        <fontName>System</fontName>
        <fontSize>12</fontSize>
        <fontWidth>550</fontWidth>
        <foreColor>0</foreColor>
        <isItalic>0</isItalic>
        <isUnderline>0</isUnderline>
        <textHeight>60</textHeight>
      </nodeGraphInfo>
    </activity>
    <activity>
      <activityId>manualActivity1</activityId>
      <activityName>人工活动1</activityName>
      <description></description>
      <splitType>XOR</splitType>
      <joinType>XOR</joinType>
      <priority>60</priority>
      <activityType>manual</activityType>
      <splitTransaction>false</splitTransaction>
      <activateRule>
        <activateRuleType>directRunning</activateRuleType>
      </activateRule>
      <implementation>
        <manualActivity>
          <allowAgent>true</allowAgent>
          <customURL>
            <isSpecifyURL>false</isSpecifyURL>
            <urlType>presentation-logic</urlType>
          </customURL>
          <resetUrl>
            <isSpecifyURL>false</isSpecifyURL>
            <urlType>presentation-logic</urlType>
          </resetUrl>
          <participants>
            <participantType>process-starter</participantType>
            <specialActivityID></specialActivityID>
            <specialPath></specialPath>
          </participants>
          <formFields/>
          <timeLimit>
            <isTimeLimitSet>false</isTimeLimitSet>
            <calendarSet>
              <initType>appoint</initType>
              <calendarInfo>
                <resourceType>business-calendar</resourceType>
                <resourceID>default</resourceID>
                <resourceName>默认日历</resourceName>
                <parameters/>
              </calendarInfo>
            </calendarSet>
          </timeLimit>
          <multiWorkItem>
            <isMulWIValid>false</isMulWIValid>
            <workitemNumStrategy>participant-number</workitemNumStrategy>
            <finishRule>all</finishRule>
            <isAutoCancel>false</isAutoCancel>
            <sequentialExecute>false</sequentialExecute>
          </multiWorkItem>
          <triggerEvents/>
          <rollBack/>
          <freeFlowRule>
            <isFreeActivity>false</isFreeActivity>
            <freeRangeStrategy>freeWithinProcess</freeRangeStrategy>
            <isOnlyLimitedManualActivity>false</isOnlyLimitedManualActivity>
          </freeFlowRule>
          <resetParticipant>originalParticipant</resetParticipant>
        </manualActivity>
      </implementation>
      <isStartActivity>false</isStartActivity>
      <nodeGraphInfo>
        <color>16777215</color>
        <height>28</height>
        <width>28</width>
        <x>382</x>
        <y>150</y>
        <lookAndFeel>classic</lookAndFeel>
        <fontName>System</fontName>
        <fontSize>12</fontSize>
        <fontWidth>550</fontWidth>
        <foreColor>0</foreColor>
        <isItalic>0</isItalic>
        <isUnderline>0</isUnderline>
        <textHeight>60</textHeight>
      </nodeGraphInfo>
    </activity>
    <activity>
      <activityId>manualActivity2</activityId>
      <activityName>人工活动2</activityName>
      <description></description>
      <splitType>XOR</splitType>
      <joinType>XOR</joinType>
      <priority>60</priority>
      <activityType>manual</activityType>
      <splitTransaction>false</splitTransaction>
      <activateRule>
        <activateRuleType>directRunning</activateRuleType>
      </activateRule>
      <implementation>
        <manualActivity>
          <allowAgent>true</allowAgent>
          <customURL>
            <isSpecifyURL>false</isSpecifyURL>
            <urlType>presentation-logic</urlType>
          </customURL>
          <resetUrl>
            <isSpecifyURL>false</isSpecifyURL>
            <urlType>presentation-logic</urlType>
          </resetUrl>
          <participants>
            <participantType>process-starter</participantType>
            <specialActivityID></specialActivityID>
            <specialPath></specialPath>
          </participants>
          <formFields/>
          <timeLimit>
            <isTimeLimitSet>false</isTimeLimitSet>
            <calendarSet>
              <initType>appoint</initType>
              <calendarInfo>
                <resourceType>business-calendar</resourceType>
                <resourceID>default</resourceID>
                <resourceName>默认日历</resourceName>
                <parameters/>
              </calendarInfo>
            </calendarSet>
          </timeLimit>
          <multiWorkItem>
            <isMulWIValid>false</isMulWIValid>
            <workitemNumStrategy>participant-number</workitemNumStrategy>
            <finishRule>all</finishRule>
            <isAutoCancel>false</isAutoCancel>
            <sequentialExecute>false</sequentialExecute>
          </multiWorkItem>
          <triggerEvents/>
          <rollBack/>
          <freeFlowRule>
            <isFreeActivity>false</isFreeActivity>
            <freeRangeStrategy>freeWithinActivityList</freeRangeStrategy>
            <isOnlyLimitedManualActivity>false</isOnlyLimitedManualActivity>
          </freeFlowRule>
          <resetParticipant>originalParticipant</resetParticipant>
        </manualActivity>
      </implementation>
      <isStartActivity>false</isStartActivity>
      <nodeGraphInfo>
        <color>16777215</color>
        <height>28</height>
        <width>28</width>
        <x>525</x>
        <y>150</y>
        <lookAndFeel>classic</lookAndFeel>
        <fontName>System</fontName>
        <fontSize>12</fontSize>
        <fontWidth>550</fontWidth>
        <foreColor>0</foreColor>
        <isItalic>0</isItalic>
        <isUnderline>0</isUnderline>
        <textHeight>60</textHeight>
      </nodeGraphInfo>
    </activity>
  </activities>
  <notes/>
  <resource/>
</workflowProcess>